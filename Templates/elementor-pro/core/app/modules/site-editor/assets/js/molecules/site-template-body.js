import { Button, CardBody, CardImage, CardOverlay } from '@elementor/app-ui';
import PreviewIFrame from '../atoms/preview-iframe';

export const SiteTemplateBody = ( props ) => {
	const thumbnail = props.thumbnail || props.placeholderUrl,
		Overlay = () => {
			const previewButtonConfig = {
				className: 'e-site-template__overlay-preview-button',
				text: ( __( 'Preview', 'elementor-pro' ) ),
				icon: 'eicon-preview-medium',
				url: `/site-editor/templates/${ props.type }/${ props.id }`,
			};

			return (
				<CardOverlay className="e-site-template__overlay-preview">
					<Button {...previewButtonConfig} />
				</CardOverlay>
			);
		},
		Thumbnail = () => {
			return (
			<CardImage alt={ props.title } src={ thumbnail }>
				{ ! props.extended && <Overlay/> }
			</CardImage>
			);
		};

	return (
		<CardBody>
			{
				props.extended && props.previewUrl ?
					<PreviewIFrame src={ props.previewUrl } templateType={ props.type } /> :
					<Thumbnail />
			}
		</CardBody>
	);
};

SiteTemplateBody.propTypes = {
	extended: PropTypes.bool,
	id: PropTypes.number,
	title: PropTypes.string,
	thumbnail: PropTypes.string,
	placeholderUrl: PropTypes.string,
	type: PropTypes.string,
	previewUrl: PropTypes.string,
};
