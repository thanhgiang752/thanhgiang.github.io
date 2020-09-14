export class BaseContext extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			action: {
				current: null,
				loading: false,
				error: null,
				errorMeta: {},
			},

			updateActionState: this.updateActionState.bind( this ),
		};
	}

	executeAction( name, handler ) {
		this.updateActionState( { current: name, loading: true, error: null, errorMeta: {} } );

		return handler()
			.then( ( response ) => {
				this.updateActionState( { current: null, loading: false, error: null, errorMeta: {} } );

				return Promise.resolve( response );
			} )
			.catch( ( error ) => {
				this.updateActionState( { current: name, loading: false, error: error.message, errorMeta: error } );

				return Promise.reject( error );
			} );
	}

	updateActionState( data ) {
		return this.setState( ( prev ) => ( {
			action: {
				...prev.action,
				...data,
			},
		} ) );
	}
}

export default BaseContext;
