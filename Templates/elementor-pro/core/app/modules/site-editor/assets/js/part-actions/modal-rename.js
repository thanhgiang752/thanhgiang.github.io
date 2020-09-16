import Modal from './modal';
import { Context as TemplatesContext } from '../context/templates';

export default function ModalRename( props ) {
	const { findTemplateItemInState, updateTemplate } = React.useContext( TemplatesContext ),
		template = findTemplateItemInState( props.id );

	const [ title, setTitle ] = React.useState( false );

	const closeModal = ( shouldUpdate ) => {
		props.setModalId( null );

		if ( shouldUpdate ) {
			updateTemplate( props.id, { post_title: title } );
		}
	};

	if ( ! props.id ) {
		return '';
	}

	return (
		<Modal
			title={ __( 'Rename Part', 'elementor-pro' ) }
			buttonApplyText={ __( 'Change', 'elementor-pro' ) }
			buttonCancelText={ __( 'Cancel', 'elementor-pro' ) }
			onApply={ () => closeModal( true ) }
			onCancel={ () => closeModal() }
		>
			<input type="text" className="eps-input eps-input-text eps-input--block" autoFocus defaultValue={ template.title } onChange={ ( e ) => setTitle( e.target.value ) } />
		</Modal>
	);
}

ModalRename.propTypes = {
	id: PropTypes.number,
	setModalId: PropTypes.func.isRequired,
};
