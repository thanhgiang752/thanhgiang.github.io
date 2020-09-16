import Modal from '../../part-actions/modal';

export default function ImportErrorModal( props ) {
	return (
		<div className="error-modal">
			<Modal
				title=""
				buttonApplyText={ __( 'Go Back', 'elementor-pro' ) }
				buttonCancelText={ __( 'Learn More', 'elementor-pro' ) }
				onApply={ props.close }
				onCancel={ props.close }
			>
				<p className="error-modal__description">
					{ props.error }
				</p>
			</Modal>
		</div>
	);
}

ImportErrorModal.propTypes = {
	error: PropTypes.string.isRequired,
	close: PropTypes.func.isRequired,
};
