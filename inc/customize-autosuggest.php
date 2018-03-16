<?php


namespace JB\WooAutosuggest;



function enqueue_frontend_scripts() {
	
	if( function_exists('is_checkout') && is_checkout() ) {

		wp_enqueue_script( 'jb-was-checkout-autosuggest', plugins_url( '../assets/checkout-autosuggest.js', __FILE__), ['selectWoo'] );

	}
}

add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\enqueue_frontend_scripts', 20 );
