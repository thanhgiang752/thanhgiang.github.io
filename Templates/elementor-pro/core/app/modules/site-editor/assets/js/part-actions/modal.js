import { Button } from '@elementor/app-ui';

import './dialog.scss';

export default function Modal( props ) {
	return (
		<section className="eps-modal__overlay">
			<form onSubmit={ props.onApply } className="eps-modal eps-dialog">
				<div className="eps-dialog__content">
					<h3 className="eps-dialog__title">{ props.title }</h3>
					{ props.children }
				</div>
				<div className="dialog__buttons">
					<Button className="eps-dialog__button eps-dialog__button-cancel" key="cancel" text={ props.buttonCancelText } onClick={ props.onCancel } tabIndex="2" type="button" />
					<Button className="eps-dialog__button eps-dialog__button-submit" key="apply" text={ props.buttonApplyText } onClick={ props.onApply } tabIndex="1" type="submit" />
				</div>
			</form>
		</section>
	);
}

Modal.propTypes = {
	buttonApplyText: PropTypes.string.isRequired,
	buttonCancelText: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
	onApply: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
};
