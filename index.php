<?php

/**
 * Plugin Name: Recogito Annotations
 * Description: A plugin to integrate recogito.js for annotations in WordPress.
 * Version: 1.0
 * Author: Your Name
 */

// Hook for enqueuing scripts
add_action('wp_enqueue_scripts', 'enqueue_recogito_scripts');

function enqueue_recogito_scripts()
{
    // Check if 'annotate' and 'user' query parameters are set and valid
    if (isset($_COOKIE['annotate']) || (isset($_GET['annotate']) && $_GET['annotate'] === 'true' && isset($_GET['user']) && $_GET['user'] === 'laurent')) {
        if (isset($_COOKIE['annotate'])){
            $cookie = true;
            $user = $_COOKIE['annotate'];
        } else {
            $cookie = false;
            $user = $_GET['user'];
        }

        // Enqueue recogito.js
        wp_enqueue_script('recogito-js', plugin_dir_url(__FILE__) . 'js/recogito.min.js', array(), '1.0.0', false);
        wp_enqueue_style('recogito', plugin_dir_url(__FILE__) . 'css/recogito.min.css');
        wp_enqueue_style('recogito-custom', plugin_dir_url(__FILE__) . 'css/custom-annotations.css');
        // Include manager.php to access the constants
        include_once('/app/.include/manager.php');
        // Get the current WordPress locale
        $locale = get_locale();
        error_log($locale);
        // Enqueue your custom JS file
        wp_enqueue_script('custom-annotations-js', plugin_dir_url(__FILE__) . 'js/custom-annotations.js', array('recogito-js'), '1.0.0', false);
        // Localize script to pass data from PHP to JavaScript
        wp_localize_script('custom-annotations-js', 'appConfig', array(
            'locale' => $locale,
            'user' => $user,
            'cookie' => $cookie,
        ));
    }
}

function fetch_annotations(WP_REST_Request $request)
{
    $url = $request->get_param('url');
    // Include manager.php to access the constants
    include_once('/app/.include/manager.php');
    // Get existing annotations from the API
    $api_url = 'https://local.faaaster.io/api/applications/' . APP_ID . '/instances/' . BRANCH . '/annotate?url='. $url;
    error_log($api_url);

    // Define the request arguments
    $args = array(
        'headers' => array(
            'Authorization' => 'Bearer ' .  WP_API_KEY, // Add the Authorization header with the API key
        ),
    );
    // Make the API call
    $response = wp_remote_get($api_url, $args);
    if (!$response) {
        error_log("Update event error: " . $response->get_error_message());
    }

    if (is_wp_error($response)) {
        return new WP_Error('request_failed', 'API request failed', array('status' => 500));
    }
    error_log(json_encode($response));
    $annotations = json_decode(wp_remote_retrieve_body($response), true);

    // Make the API call
    $response = wp_remote_get($api_url, $args);

    if (is_wp_error($response)) {
        return new WP_Error('request_failed', 'API request failed', array('status' => 500));
    }

    // You may format the response as needed
    return rest_ensure_response(json_decode(wp_remote_retrieve_body($response), true));
}

add_action('rest_api_init', function () {
    register_rest_route('annotate/v1', '/annotations/', array(
        'methods' => 'GET',
        'callback' => 'fetch_annotations',
    ));
});

add_action('rest_api_init', function () {
    register_rest_route('annotate/v1', '/proxy/', array(
        'methods' => 'POST',
        'callback' => 'handle_proxy_request',
    ));
});

function handle_proxy_request(WP_REST_Request $request)
{
    $url = $request->get_param('url');
    // Extract data from the request
    $data = $request->get_json_params();

    // The API URL you want to call
    $api_url = 'https://local.faaaster.io/api/applications/' . APP_ID . '/instances/' . BRANCH . '/annotate';


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
    if (!wp_remote_post($api_url, $args)) {
        error_log("Update event error: " . $response->get_error_message());
    }

    if (is_wp_error($response)) {
        return new WP_Error('request_failed', 'API request failed', array('status' => 500));
    }

    // You may format the response as needed
    return rest_ensure_response(json_decode(wp_remote_retrieve_body($response), true));
}
