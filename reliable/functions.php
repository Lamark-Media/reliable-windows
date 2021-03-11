<?php

function childtheme_styles() {
 
 // enqueue style
 wp_enqueue_style( 'parent', get_template_directory_uri().'/style.css' );
 wp_register_style( 'child', get_stylesheet_directory_uri().'/css/style.css', array(), '1.0', 'all' );
 wp_enqueue_style('child'); // Enqueue it!

    //enqueue javascript
    wp_register_script('custom_js', get_stylesheet_directory_uri().'/js/custom.js', 'jquery');
    wp_enqueue_script('custom_js');

}
add_action( 'wp_enqueue_scripts', 'childtheme_styles');