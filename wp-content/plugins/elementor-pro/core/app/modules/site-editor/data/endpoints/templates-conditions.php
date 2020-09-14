<?php
namespace ElementorPro\Core\App\Modules\SiteEditor\Data\Endpoints;

use Elementor\Core\Utils\Exceptions;
use ElementorPro\Modules\ThemeBuilder\Module;
use ElementorPro\Core\App\Modules\SiteEditor\Data\Responses\Lock_Error_Response;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class TemplatesConditions extends Base_Endpoint {
	/**
	 * @return string
	 */
	public function get_name() {
		return 'templates-conditions';
	}

	protected function register() {
		$this->register_item_route( \WP_REST_Server::EDITABLE );
	}

	public function update_item( $template_id, $request ) {
		$lock_by_user_id = $this->is_post_lock( $template_id );

		if ( $lock_by_user_id ) {
			return new Lock_Error_Response( $lock_by_user_id );
		}

		$data = $request->get_body_params();

		if ( ! isset( $data['conditions'] ) ) {
			$data['conditions'] = [];
		}

		$is_saved = $this->save_conditions( $template_id, $data['conditions'] );

		if ( ! $is_saved ) {
			return new \WP_Error( 'conditions', 'Error while saving conditions.', [ 'status' => Exceptions::INTERNAL_SERVER_ERROR ] );
		}

		return true;
	}

	protected function save_conditions( $post_id, $conditions ) {
		$conditions_to_save = [];

		foreach ( $conditions as $condition ) {
			unset( $condition['_id'] );
			$conditions_to_save[] = rtrim( implode( '/', $condition ), '/' );
		}

		/** @var Module $theme_builder_module */
		$theme_builder_module = Module::instance();

		$document = $theme_builder_module->get_document( $post_id );

		if ( empty( $conditions_to_save ) ) {
			$updated = delete_post_meta( $post_id, '_elementor_conditions' );
		} else {
			$updated = $document->update_meta( '_elementor_conditions', $conditions_to_save );
		}

		return $updated;
	}
}
