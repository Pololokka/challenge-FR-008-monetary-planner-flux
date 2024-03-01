import { usePlannerStore } from '../../FluxCore/Contexts/plannerContext';
import { plannerActions } from '../../FluxCore/Actions/Planner';

const PlannerValues = () => {
  const { state, dispatch } = usePlannerStore();

  return (
    <>
      <div className="div__inputs">
        <label className="text" htmlFor="totalAmt">
          Insira o total ganho:
        </label>
        <input
          type="number"
          className="input-text"
          name="totalAmt"
          id="totalAmt"
          min={0}
          value={state.totalAmt || 0}
          onChange={(event) =>
            dispatch(plannerActions.setTotalAmt(parseInt(event.target.value)))
          }
        />
      </div>
    </>
  );
};

export default PlannerValues;
