<?php

/**
 * Plugin Name: Faaaster Annotations
 * Description: Visual feedback & collaboration on your WordPress website — leave annotations directly on the front-end.
 * Version: 2.0.0
 * Author: Faaaster.io
 * Author URI: https://www.faaaster.io/
 */

if (!defined('ABSPATH')) {
    exit;
}

define('FAAASTER_ANNOTATE_VERSION', '2.0.0');

/**
 * Decide whether the widget should load for this request.
 * Same gating rules as v1: trial_bypass cookie required, "disabled" flag in
 * the faaaster-annotate cookie wins unless the request carries ?t= (share link).
 */
function faaaster_annotate_should_load()
{
    if (!isset($_COOKIE['trial_bypass'])) {
        return false;
    }

    if (!defined('APP_ID') || !defined('BRANCH') || !APP_ID || !BRANCH) {
        return false;
    }

    if (isset($_COOKIE['faaaster-annotate']) && !isset($_GET['t'])) {
        $state = json_decode(stripslashes($_COOKIE['faaaster-annotate']));
        if ($state && !empty($state->disabled)) {
            return false;
        }
    }

    return true;
}

add_action('wp_enqueue_scripts', 'faaaster_annotate_enqueue');

function faaaster_annotate_enqueue()
{
    if (!faaaster_annotate_should_load()) {
        return;
    }

    $bundle = plugin_dir_path(__FILE__) . 'dist/faaaster-annotate.js';
    if (!file_exists($bundle)) {
        return;
    }

    wp_enqueue_script(
        'faaaster-annotate',
        plugin_dir_url(__FILE__) . 'dist/faaaster-annotate.js',
        array(),
        FAAASTER_ANNOTATE_VERSION . '-' . filemtime($bundle),
        true
    );

    // Identity: WP user if logged in, otherwise optional ?user= / ?email=
    // from share links (the widget falls back to its own cookie / modal).
    $username = null;
    $email = null;
    $current_user = wp_get_current_user();
    if ($current_user->exists()) {
        $username = $current_user->user_login;
        $email = $current_user->user_email;
    }
    if (isset($_GET['user'])) {
        $username = sanitize_text_field(wp_unslash($_GET['user']));
    }
    if (isset($_GET['email'])) {
        $email = sanitize_email(wp_unslash($_GET['email']));
    }

    wp_localize_script('faaaster-annotate', 'appConfig', array(
        'locale' => get_locale(),
        'user' => $username,
        'email' => $email,
        'annotate' => isset($_GET['annotate']) ? sanitize_text_field(wp_unslash($_GET['annotate'])) : false,
        'disabled' => false,
        'restBase' => esc_url_raw(rest_url()),
    ));
}

/**
 * REST proxy to the Faaaster API — unchanged routes from v1
 * (annotate/v1/annotations, annotate/v1/proxy, annotate/v1/users).
 */
function faaaster_annotate_api_base()
{
    if (file_exists('/app/.include/manager.php')) {
        include_once '/app/.include/manager.php';
    }
    if (!defined('APP_ID') || !defined('BRANCH') || !defined('WP_API_KEY')) {
        return null;
    }
    return 'https://app.faaaster.io/api/applications/' . APP_ID . '/instances/' . BRANCH . '/annotate';
}

function faaaster_annotate_fetch(WP_REST_Request $request)
{
    $base = faaaster_annotate_api_base();
    if (!$base) {
        return new WP_Error('not_configured', 'Faaaster API constants missing', array('status' => 500));
    }

    // Site-wide listing (annotations of every page, each with its `url` key).
    // Upstream route to implement Next-side; status is propagated so the
    // widget can hide the feature while it doesn't exist (404).
    if ($request->get_param('scope') === 'site') {
        $response = wp_remote_get($base . '/all', array(
            'headers' => array(
                'Authorization' => 'Bearer ' . WP_API_KEY,
            ),
        ));
        if (is_wp_error($response)) {
            return new WP_Error('request_failed', 'API request failed', array('status' => 502));
        }
        nocache_headers();
        return new WP_REST_Response(
            json_decode(wp_remote_retrieve_body($response), true),
            wp_remote_retrieve_response_code($response) ?: 502
        );
    }

    // Page key: raw "%%"-encoded path, forwarded as-is (backend partitions on it).
    $url = sanitize_text_field($request->get_param('url'));

    $response = wp_remote_get($base . '?url=' . $url, array(
        'headers' => array(
            'Authorization' => 'Bearer ' . WP_API_KEY,
        ),
    ));

    if (is_wp_error($response)) {
        return new WP_Error('request_failed', 'API request failed', array('status' => 500));
    }

    nocache_headers();
    return rest_ensure_response(json_decode(wp_remote_retrieve_body($response), true));
}

function faaaster_annotate_save(WP_REST_Request $request)
{
    $base = faaaster_annotate_api_base();
    if (!$base) {
        return new WP_Error('not_configured', 'Faaaster API constants missing', array('status' => 500));
    }

    $url = sanitize_text_field($request->get_param('url'));

    $response = wp_remote_post($base, array(
        'body' => json_encode(array(
            'url' => $url,
            'data' => $request->get_json_params(),
        )),
        'headers' => array(
            'Content-Type' => 'application/json',
            'Authorization' => 'Bearer ' . WP_API_KEY,
        ),
    ));

    if (is_wp_error($response)) {
        return new WP_Error('request_failed', 'API request failed', array('status' => 500));
    }

    nocache_headers();
    return rest_ensure_response(json_decode(wp_remote_retrieve_body($response), true));
}

/**
 * Unit operations: forward a single-annotation upsert/delete to the Faaaster
 * API. The upstream status code is propagated so the widget can detect an
 * API that doesn't support unit ops yet (404) and fall back to full saves.
 */
function faaaster_annotate_upsert(WP_REST_Request $request)
{
    $base = faaaster_annotate_api_base();
    if (!$base) {
        return new WP_Error('not_configured', 'Faaaster API constants missing', array('status' => 500));
    }

    $response = wp_remote_post($base . '/annotation', array(
        'body' => json_encode(array(
            'url' => sanitize_text_field($request->get_param('url')),
            'annotation' => $request->get_json_params(),
        )),
        'headers' => array(
            'Content-Type' => 'application/json',
            'Authorization' => 'Bearer ' . WP_API_KEY,
        ),
    ));

    if (is_wp_error($response)) {
        return new WP_Error('request_failed', 'API request failed', array('status' => 502));
    }

    nocache_headers();
    return new WP_REST_Response(
        json_decode(wp_remote_retrieve_body($response), true),
        wp_remote_retrieve_response_code($response) ?: 502
    );
}

function faaaster_annotate_remove(WP_REST_Request $request)
{
    $base = faaaster_annotate_api_base();
    if (!$base) {
        return new WP_Error('not_configured', 'Faaaster API constants missing', array('status' => 500));
    }

    $response = wp_remote_request($base . '/annotation', array(
        'method' => 'DELETE',
        'body' => json_encode(array(
            'url' => sanitize_text_field($request->get_param('url')),
            'id' => sanitize_text_field($request->get_param('id')),
        )),
        'headers' => array(
            'Content-Type' => 'application/json',
            'Authorization' => 'Bearer ' . WP_API_KEY,
        ),
    ));

    if (is_wp_error($response)) {
        return new WP_Error('request_failed', 'API request failed', array('status' => 502));
    }

    nocache_headers();
    return new WP_REST_Response(
        json_decode(wp_remote_retrieve_body($response), true),
        wp_remote_retrieve_response_code($response) ?: 502
    );
}

/**
 * File upload proxy (attachments & creation screenshots). The file is
 * validated locally (size, MIME) then streamed as a raw binary body to the
 * Faaaster API, which stores it in GCS and returns its URL:
 *   POST {api}/annotate/upload
 *   Headers: Content-Type, X-File-Name, X-Page-Url, Authorization
 *   Response: { url, name, type, size }
 * Until that route is implemented upstream, the propagated 404 makes the
 * widget hide the attachments UI and skip screenshots.
 */
function faaaster_annotate_upload(WP_REST_Request $request)
{
    $base = faaaster_annotate_api_base();
    if (!$base) {
        return new WP_Error('not_configured', 'Faaaster API constants missing', array('status' => 500));
    }

    $files = $request->get_file_params();
    if (empty($files['file']) || !is_uploaded_file($files['file']['tmp_name'])) {
        return new WP_Error('no_file', 'No file provided', array('status' => 400));
    }
    $file = $files['file'];

    if ($file['size'] > 5 * 1024 * 1024) {
        return new WP_Error('too_large', 'File exceeds 5 MB', array('status' => 413));
    }

    $allowed = array(
        'image/jpeg',
        'image/png',
        'image/webp',
        'image/gif',
        'application/pdf',
        'application/zip',
        'application/x-zip-compressed',
    );
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mime = finfo_file($finfo, $file['tmp_name']);
    finfo_close($finfo);
    if (!in_array($mime, $allowed, true)) {
        return new WP_Error('bad_type', 'File type not allowed', array('status' => 415));
    }

    $response = wp_remote_post($base . '/upload', array(
        'timeout' => 30,
        'body' => file_get_contents($file['tmp_name']),
        'headers' => array(
            'Content-Type' => $mime,
            'X-File-Name' => sanitize_file_name($file['name']),
            'X-Page-Url' => sanitize_text_field($request->get_param('url')),
            'Authorization' => 'Bearer ' . WP_API_KEY,
        ),
    ));

    if (is_wp_error($response)) {
        return new WP_Error('request_failed', 'API request failed', array('status' => 502));
    }

    nocache_headers();
    return new WP_REST_Response(
        json_decode(wp_remote_retrieve_body($response), true),
        wp_remote_retrieve_response_code($response) ?: 502
    );
}

function faaaster_annotate_users(WP_REST_Request $request)
{
    $base = faaaster_annotate_api_base();
    if (!$base) {
        return new WP_Error('not_configured', 'Faaaster API constants missing', array('status' => 500));
    }

    $response = wp_remote_post($base . '/users', array(
        'body' => json_encode(array(
            'data' => $request->get_json_params(),
        )),
        'headers' => array(
            'Content-Type' => 'application/json',
            'Authorization' => 'Bearer ' . WP_API_KEY,
        ),
    ));

    if (is_wp_error($response)) {
        return new WP_Error('request_failed', 'API request failed', array('status' => 500));
    }

    nocache_headers();
    return rest_ensure_response(json_decode(wp_remote_retrieve_body($response), true));
}

add_action('rest_api_init', function () {
    register_rest_route('annotate/v1', '/annotations/', array(
        'methods' => 'GET',
        'callback' => 'faaaster_annotate_fetch',
        'permission_callback' => '__return_true',
    ));

    register_rest_route('annotate/v1', '/proxy/', array(
        'methods' => 'POST',
        'callback' => 'faaaster_annotate_save',
        'permission_callback' => '__return_true',
    ));

    register_rest_route('annotate/v1', '/annotation/', array(
        array(
            'methods' => 'POST',
            'callback' => 'faaaster_annotate_upsert',
            'permission_callback' => '__return_true',
        ),
        array(
            'methods' => 'DELETE',
            'callback' => 'faaaster_annotate_remove',
            'permission_callback' => '__return_true',
        ),
    ));

    register_rest_route('annotate/v1', '/upload/', array(
        'methods' => 'POST',
        'callback' => 'faaaster_annotate_upload',
        'permission_callback' => '__return_true',
    ));

    register_rest_route('annotate/v1', '/users/', array(
        'methods' => 'POST',
        'callback' => 'faaaster_annotate_users',
        'permission_callback' => '__return_true',
    ));
});
