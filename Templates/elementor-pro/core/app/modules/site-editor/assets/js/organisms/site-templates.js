import { CssGrid } from '@elementor/app-ui';
import SiteTemplate from '../molecules/site-template';
import { PartActionsModals } from '../part-actions/modals-and-buttons';
import { Context as TemplatesContext } from '../context/templates';
import useTemplatesScreenshot from '../hooks/use-templates-screenshot';

export default function SiteTemplates( props ) {
	let { templates } = React.useContext( TemplatesContext ),
		gridColumns;

	// Make the templates object a memorize value, will re run again only if
	// templates has been changed, also sort the templates by `isActive`.
	templates = React.useMemo( () => {
		return Object.values( templates )
			.sort( ( a, b ) => a.isActive === b.isActive ? -1 : 1 );
	}, [ templates ] );

	// Start to capture screenshots.
	useTemplatesScreenshot( props.type );

	const siteTemplateConfig = {};

	if ( props.type ) {
		templates = templates.filter( ( item ) => item.type === props.type );
		siteTemplateConfig.extended = true;
		siteTemplateConfig.type = props.type;

		switch ( props.type ) {
			case 'header':
			case 'footer':
				gridColumns = 1;
				siteTemplateConfig.aspectRatio = 'wide';
				break;
			default:
				gridColumns = 2;
		}
	}

	if ( ! templates || ! templates.length ) {
		return <h3>{ __( 'No Templates found. Want to create one?', 'elementor-pro' ) }...</h3>;
	}

	return (
		<section className="e-site-editor__site-templates">
			<PartActionsModals/>
			<CssGrid columns={ gridColumns } spacing={ 24 } colMinWidth={ 200 }>
				{
					templates.map( ( item ) =>
						<SiteTemplate
							key={ item.id }
							{ ... item }
							{ ... siteTemplateConfig }
							isSelected={ parseInt( props.id ) === item.id }/>
					)
				}
			</CssGrid>
		</section>
	);
}

SiteTemplates.propTypes = {
	type: PropTypes.string,
	id: PropTypes.string,
};
