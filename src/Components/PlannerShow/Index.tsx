import { usePlannerStore } from '../../FluxCore/Contexts/plannerContext';
import { plannerActions } from '../../FluxCore/Actions/Planner';

const PlannerShow = () => {
  const { state, dispatch } = usePlannerStore();

  return (
    <>
      <button
        className="text button-style"
        onClick={() => dispatch(plannerActions.setResult())}
      >
        Calcular
      </button>

      <div className="card__second">
        <h2 className="subtitle">
          Total que será poupado economizando {state.percentSaved} por dia:{' '}
          {state.result.saving}
        </h2>

        <h2 className="subtitle">
          Total que pode ser gasto por dia: {state.result.daily}
        </h2>
      </div>
    </>
  );
};

export default PlannerShow;
