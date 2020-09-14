import { Context as ConditionsContext, ConditionsProvider } from '../../context/conditions';
import { Button } from '@elementor/app-ui';
import ConditionType from './condition-type';
import ConditionName from './condition-name';
import ConditionSub from './condition-sub';
import ConditionSubId from './condition-sub-id';

export default function ConditionsRows() {
	const {
		conditions,
		createConditionItemInState: create,
		updateConditionItemState: update,
		removeConditionItemInState: remove,
		saveConditions: save,
		action,
	} = React.useContext( ConditionsContext );

	const rows = Object.values( conditions ).map( ( condition ) =>
		<div key={ condition.id }>
			<div className="row">
				<div className={`row-controls ${ condition.conflictError && 'row-controls--error' }` }>
					<ConditionType { ...condition } updateConditions={ update }/>
					<div className="row-controls-condition">
						<ConditionName { ...condition } updateConditions={ update }/>
						<ConditionSub { ...condition } updateConditions={ update }/>
						<ConditionSubId { ...condition } updateConditions={ update }/>
					</div>
				</div>
				<Button
					className="row-icon"
					text={ __( 'Delete', 'elementor-pro' ) }
					icon="eicon-close"
					hideText={ true }
					onClick={ () => remove( condition.id ) }
				/>
			</div>
			{
				condition.conflictError && <div className="row-conflict-error">
					{ condition.conflictError }
				</div>
			}

		</div>
	);

	const savingIcon = action.current === ConditionsProvider.actions.SAVE && action.loading ? 'eicon-loading eicon-animation-spin' : '';

	return (
		<>
			{ rows }
			<div className="add-button-wrapper">
				<Button className="add-button" text={ __( 'Add Condition', 'elementor-pro' ) } onClick={ create }/>
			</div>

			<div className="save-button-wrapper">
				<Button
					variant="contained"
					color="primary"
					size="sm"
					icon={ savingIcon }
					text={ __( 'Save & Close', 'elementor-pro' ) }
					onClick={ () => save().then( () => history.back() ) }
				/>
			</div>
		</>
	);
}
