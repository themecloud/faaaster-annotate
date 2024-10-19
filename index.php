<?php

/**
 * Plugin Name: Faaaster Annotations
 * Description: Collect feedback on your WordPress website thanks to visual annoatations. Powered by recogito.js.
 * Version: 1.0
 * Author: Faaaster.io
 * Author URI: https://www.faaaster.io/
 */

// Hook for enqueuing scripts
add_action('wp_enqueue_scripts', 'enqueue_recogito_scripts');

function enqueue_recogito_scripts()
{
    // Init variables
    $annotate = false;
    $username = null;
    $email = null;
    $disabled = null;

    // Check if cookie trial_bypass is set
    if (!isset($_COOKIE['trial_bypass'])) {
        return;
    }
    if (isset($_COOKIE['faaaster-annotate'])) {
        $faaaster_annotate_cookie = $_COOKIE['faaaster-annotate'];
        $faaaster_annotate = json_decode(stripslashes($faaaster_annotate_cookie));
        $disabled = $faaaster_annotate->disabled;
        if ($disabled == true && !isset($_GET['t'])) {
            return;
        }
    }

    // Toggle disabled if request is annotation link
    if (isset($_GET['t']) && isset($_COOKIE['faaaster-annotate'])) {
        $faaaster_annotate = $_COOKIE['faaaster-annotate'];
        $disabled = false;
    }

    // Check if constants are set
    if (!APP_ID || !BRANCH) {
        return;
    }
    $mu_path = "/" . str_replace(ABSPATH, '', WPMU_PLUGIN_DIR);

    // Enqueue recogito.js
    wp_enqueue_script('recogito-js', $mu_path . '/annotate/js/recogito.min.js', array(), '1.0.0', false);
    wp_enqueue_style('recogito', $mu_path . '/annotate/css/recogito.min.css');

    // Enqueue custom js
    wp_enqueue_script('custom-annotations-js', $mu_path . '/annotate/js/custom-annotations.js', array('recogito-js'), '1.0.0', false);
    // Enqueue custom css
    wp_enqueue_style('recogito-custom', $mu_path . '/annotate/css/custom-annotations.css');
    // Get the current WordPress locale
    $locale = get_locale();

    // error_log(isset($_COOKIE['faaaster-annotate']) || (isset($_GET['annotate']) && $_GET['annotate'] === 'true' && isset($_GET['user'])));

    // Get the current user information
    $current_user = wp_get_current_user();

    // Check if a user is logged in
    if ($current_user->exists()) {
        // User is logged in
        // Get username
        $username = $current_user->user_login;

        // Get email
        $email = $current_user->user_email;
    }
    if (isset($_GET['annotate'])) {
        $annotate = $_GET['annotate'];
    }

    // Check if 'annotate' and 'user' query parameters are set and valid
    if (isset($_GET['user']) && isset($_GET['user'])) {
        $username = $_GET['user'];
        $email = $_GET['email'];
    }
    // Localize script to pass data from PHP to JavaScript
    wp_localize_script('custom-annotations-js', 'appConfig', array(
        'locale' => $locale,
        'user' =>  $username,
        'email' => $email,
        'annotate' => $annotate,
        'disabled' => $disabled,
    ));
}

// Fetch annotations

function fetch_annotations(WP_REST_Request $request)
{
    $url = $request->get_param('url');
    // Include manager.php to access the constants
    include_once('/app/.include/manager.php');
    // Get existing annotations from the API
    $api_url = 'https://app.faaaster.io/api/applications/' . APP_ID . '/instances/' . BRANCH . '/annotate?url=' . $url;

    // Define the request arguments
    $args = array(
        'headers' => array(
            'Authorization' => 'Bearer ' .  WP_API_KEY, // Add the Authorization header with the API key
        ),
    );
    // Make the API call
    $response = wp_remote_get($api_url, $args);
    if (!$response) {
        error_log("Update event error");
    }

    if (is_wp_error($response)) {
        return new WP_Error('request_failed', 'API request failed', array('status' => 500));
    }
    //error_log(json_encode($response));
    $annotations = json_decode(wp_remote_retrieve_body($response), true);

    // Make the API call
    $response = wp_remote_get($api_url, $args);

    if (is_wp_error($response)) {
        return new WP_Error('request_failed', 'API request failed', array('status' => 500));
    }
    nocache_headers();
    // You may format the response as needed
    return rest_ensure_response(json_decode(wp_remote_retrieve_body($response), true));
}

// Push annotations

function handle_proxy_request(WP_REST_Request $request)
{
    $url = $request->get_param('url');
    // Extract data from the request
    $data = $request->get_json_params();

    // The API URL you want to call
    $api_url = 'https://app.faaaster.io/api/applications/' . APP_ID . '/instances/' . BRANCH . '/annotate';


    // Define the request arguments
    $args = array(
        'body' => json_encode(array(
            'url' => $url,
            'data' => $data
        )),
        'headers' => array(
            'Content-Type' => 'application/json',
            'Authorization' => 'Bearer ' .  WP_API_KEY, // Add the Authorization header with the API key
        ),
    );

    // Make the API call
    $response = wp_remote_post($api_url, $args);

    if (is_wp_error($response)) {
        return new WP_Error('request_failed', 'API request failed', array('status' => 500));
    }
    nocache_headers();
    // You may format the response as needed
    return rest_ensure_response(json_decode(wp_remote_retrieve_body($response), true));
}

// Handle users

function handle_users_request(WP_REST_Request $request)
{
    // Extract data from the request
    $data = $request->get_json_params();
    // error_log("users".json_encode($data));

    // The API URL you want to call
    $api_url = 'https://app.faaaster.io/api/applications/' . APP_ID . '/instances/' . BRANCH . '/annotate/users';


    // Define the request arguments
    $args = array(
        'body' => json_encode(array(
            'data' => $data
        )),
        'headers' => array(
            'Content-Type' => 'application/json',
            'Authorization' => 'Bearer ' .  WP_API_KEY, // Add the Authorization header with the API key
        ),
    );
    // Make the API call
    $response = wp_remote_post($api_url, $args);

    if (is_wp_error($response)) {
        return new WP_Error('request_failed', 'API request failed', array('status' => 500));
    }
    nocache_headers();
    // You may format the response as needed
    return rest_ensure_response(json_decode(wp_remote_retrieve_body($response), true));
}

// Define REST routes

add_action('rest_api_init', function () {
    register_rest_route('annotate/v1', '/annotations/', array(
        'methods' => 'GET',
        'callback' => 'fetch_annotations',
        'permission_callback' => '__return_true',
    ));
});

add_action('rest_api_init', function () {
    register_rest_route('annotate/v1', '/proxy/', array(
        'methods' => 'POST',
        'callback' => 'handle_proxy_request',
        'permission_callback' => '__return_true',
    ));
});

add_action('rest_api_init', function () {
    register_rest_route('annotate/v1', '/users/', array(
        'methods' => 'POST',
        'callback' => 'handle_users_request',
        'permission_callback' => '__return_true',
    ));
});
