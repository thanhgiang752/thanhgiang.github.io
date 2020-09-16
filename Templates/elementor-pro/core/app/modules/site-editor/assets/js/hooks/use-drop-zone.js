export default function useDropZone( { onDrop, onDragEnter, onDragLeave, onDragOver } ) {
	const [ inDropZone, setInDropZone ] = React.useState( false );

	const handleDragEnter = preventDefault( ( event ) => {
		setInDropZone( true );

		if ( onDragEnter ) {
			onDragEnter( event );
		}
	} );

	const handleDragLeave = preventDefault( ( event ) => {
		setInDropZone( false );

		if ( onDragLeave ) {
			onDragLeave( event );
		}
	} );

	const handleDragOver = preventDefault( ( event ) => {
		if ( ! inDropZone ) {
			setInDropZone( true );
		}

		if ( onDragOver ) {
			onDragOver( event );
		}
	} );

	const handleDrop = preventDefault( ( event ) => {
		setInDropZone( false );

		if ( onDrop ) {
			onDrop( event );
		}
	} );

	return { inDropZone, handleDragEnter, handleDragLeave, handleDragOver, handleDrop };
}

function preventDefault( listener ) {
	return ( event ) => {
		event.preventDefault();
		event.stopPropagation();

		listener( event );
	};
}
