<?php
namespace ElementorPro\Modules\ThemeBuilder\Documents;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Header extends Header_Footer_Base {

	public static function get_properties() {
		$properties = parent::get_properties();

		$properties['location'] = 'header';

		return $properties;
	}

	protected static function get_site_editor_type() {
		return 'header';
	}

	public static function get_title() {
		return __( 'Header', 'elementor-pro' );
	}

	protected static function get_site_editor_icon() {
		return 'eicon-header';
	}

	protected static function get_site_editor_tooltip_data() {
		return [
			'title' => __( 'What is a Global Header?', 'elementor-pro' ),
			'content' => __( 'The Global Header allows you to easily design and edit custom WordPress headers so you are no longer constrained by your theme’s header design limitations.', 'elementor-pro' ),
			'tip' => __( 'You can create multiple headers, and assign each to different areas of your site.', 'elementor-pro' ),
			'docs' => 'https://go.elementor.com/app-theme-builder-header',
			'video_url' => 'https://www.youtube.com/embed/tDePkL-1tu4',
		];
	}
}
