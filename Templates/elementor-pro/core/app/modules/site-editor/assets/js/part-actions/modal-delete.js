import Modal from './modal';
import { Context as TemplatesContext } from '../context/templates';

export default function ModalDelete( props ) {
	const { deleteTemplate, findTemplateItemInState } = React.useContext( TemplatesContext ),
		template = findTemplateItemInState( props.id );

	const closeModal = ( shouldUpdate ) => {
		props.setModalId( null );

		if ( shouldUpdate ) {
			deleteTemplate( props.id );
		}
	};

	if ( ! props.id ) {
		return '';
	}

	return (
		<Modal
			title={ __( 'Delete Part', 'elementor-pro' ) }
			buttonApplyText={ __( 'Delete', 'elementor-pro' ) }
			buttonCancelText={ __( 'Cancel', 'elementor-pro' ) }
			onApply={ () => closeModal( true ) }
			onCancel={ () => closeModal() }
		>
			{ __( 'Are you sure you want to delete this item', 'elementor-pro' ) } ({ template.title })
		</Modal>
	);
}

ModalDelete.propTypes = {
	id: PropTypes.number,
	setModalId: PropTypes.func.isRequired,
};
