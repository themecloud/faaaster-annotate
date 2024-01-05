<?php
/**
 * Plugin Name: Recogito Annotations
 * Description: A plugin to integrate recogito.js for annotations in WordPress.
 * Version: 1.0
 * Author: Your Name
 */

// Hook for enqueuing scripts
add_action('wp_enqueue_scripts', 'enqueue_recogito_scripts');

function enqueue_recogito_scripts() {
    // Check if 'annotate' and 'user' query parameters are set and valid
    if (isset($_GET['annotate']) && $_GET['annotate'] === 'true' && isset($_GET['user']) && $_GET['user'] === 'laurent') {
        // Enqueue recogito.js
        wp_enqueue_script('recogito-js', plugin_dir_url(__FILE__) . 'js/recogito.min.js', array(), '1.0.0', false);
        wp_enqueue_style('recogito', plugin_dir_url(__FILE__) . 'css/recogito.min.css');
        // Include manager.php to access the constants
        include_once('/app/.include/manager.php');
        // Enqueue your custom JS file
        wp_enqueue_script('custom-annotations-js', plugin_dir_url(__FILE__) . 'js/custom-annotations.js', array('recogito-js'), '1.0.0', false);
        // Localize script to pass data from PHP to JavaScript
        wp_localize_script('custom-annotations-js', 'appConfig', array(
        'applicationId' => APP_ID,
        'instanceId' => BRANCH,
        ));


    }
}
