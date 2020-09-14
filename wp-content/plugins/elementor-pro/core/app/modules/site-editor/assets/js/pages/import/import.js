import { Icon, Button } from '@elementor/app-ui';
import { Context as TemplatesContext, TemplatesProvider } from '../../context/templates';
import BackButton from '../../molecules/back-button';
import useDropZone from '../../hooks/use-drop-zone';
import ImportSuccessModal from './import-success-modal';
import ImportErrorModal from './import-error-modal';

import './import.scss';

export default function Import() {
	const { importTemplates, action, updateActionState } = React.useContext( TemplatesContext );
	const [ modalTemplate, setModalTemplate ] = React.useState( null );

	const isUploading = React.useMemo( () => action.current === TemplatesProvider.actions.IMPORT && action.loading, [ action ] );
	const hasError = React.useMemo( () => action.current === TemplatesProvider.actions.IMPORT && action.error, [ action ] );

	const upload = React.useCallback( ( file ) => {
		if ( isUploading ) {
			return;
		}

		readFile( file )
			.then( ( fileData ) => importTemplates( { fileName: file.name, fileData } ) )
			.then( ( response ) => {
				// For now it show a modal for the first template ONLY!
				setModalTemplate( response.data[ 0 ] );
			} );
	}, [] );

	const { inDropZone, handleDragOver, handleDragLeave, handleDragEnter, handleDrop } = useDropZone( {
		onDrop: ( event ) => {
			upload( event.dataTransfer.files[ 0 ] );
		},
	} );

	const savingIcon = isUploading ? 'eicon-spinner' : '';

	return (
		<section className="site-editor__import">
			{ modalTemplate && <ImportSuccessModal template={ modalTemplate }/> }
			{ hasError && <ImportErrorModal
				error={ action.error }
				close={ () => updateActionState( { current: null, error: null } ) }
			/> }
			<BackButton/>
			<form className="upload-box">
				<div
					className={ `upload-box__inner ${ inDropZone && 'upload-box__inner--active' }` }
					onDragEnter={ handleDragEnter }
					onDragLeave={ handleDragLeave }
					onDragOver={ handleDragOver }
					onDrop={ handleDrop }
				>
					<div>
						<Icon className="eicon-library-upload upload-box__icon"/>
						<h1 className="upload-box__title">
							{ __( 'Import Template To Your Library', 'elementor-pro' ) }
						</h1>
						<p className="upload-box__description">
							{ __( 'Drag & Drop your .JSON or .zip template file', 'elementor-pro' ) }
						</p>
						<p className="upload-box__or">
							{ __( 'or', 'elementor-pro' ) }
						</p>
						<label htmlFor="file">
							<Button
								variant="contained"
								color="primary"
								size="lg"
								icon={ savingIcon }
								text={ __( 'Select File', 'elementor-pro' ) }
							/>
						</label>
						<input
							type="file"
							name="file"
							id="file"
							className="upload-box__input"
							accept=".json,.zip"
							onChange={ ( event ) => upload( event.target.files[ 0 ] ) }
						/>
					</div>
				</div>
			</form>
		</section>
	);
}

function readFile( file ) {
	return new Promise( ( ( resolve ) => {
		const fileReader = new FileReader();

		fileReader.readAsDataURL( file );

		fileReader.onload = ( event ) => {
			resolve( event.target.result.replace( /^[^,]+,/, '' ) );
		};
	} ) );
}
