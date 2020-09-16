import Modal from '../../part-actions/modal';

export default function ImportSuccessModal( props ) {
	return (
		<div className="success-modal">
			<Modal
				title=""
				buttonApplyText={ __( 'Preview', 'elementor-pro' ) }
				buttonCancelText={ __( 'Edit', 'elementor-pro' ) }
				onApply={ () => location.href = props.template.url }
				onCancel={ () => location.href = props.template.editURL }
			>
				<p className="success-modal__description">
					{ __( 'Your template was imported.', 'elementor-pro' ) }
				</p>
			</Modal>
		</div>
	);
}

ImportSuccessModal.propTypes = {
	template: PropTypes.object,
};
