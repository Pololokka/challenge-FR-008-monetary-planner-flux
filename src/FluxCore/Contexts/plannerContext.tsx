import { createContext, useContext, useEffect, useReducer } from 'react';
import { PlannerAction, plannerActions } from '../Actions/Planner';
import { PlannerState, plannerReducer } from '../Reducers/Planner';

interface PlannerStore {
  state: PlannerState;
  dispatch: React.Dispatch<PlannerAction>;
}

export const initialState: PlannerState = {
  totalAmt: '',
  percentSaved: 5,
  curDay: 1,
  lastDay: 31,
  result: 0,
  resultDaily: 0,
};

const PlannerStore = createContext({} as PlannerStore);

function PlannerProvider({ children }: React.PropsWithChildren) {
  const [state, dispatch] = useReducer(plannerReducer, initialState);

  useEffect(() => {
    if (
      state.lastDay !== 0 &&
      state.curDay !== 0 &&
      state.percentSaved !== 0 &&
      state.totalAmt !== 0
    ) {
      const saving = state.totalAmt * (state.percentSaved / 100);

      const time = state.lastDay - state.curDay + 1;

      const daily = parseInt(((state.totalAmt - saving) / time).toFixed(2));

      dispatch(plannerActions.setResult(saving));
      dispatch(plannerActions.setResultDaily(daily));
    }
  }, [state.curDay, state.lastDay, state.percentSaved, state.totalAmt]);

  return (
    <PlannerStore.Provider value={{ state, dispatch }}>
      {children}
    </PlannerStore.Provider>
  );
}

const usePlannerStore = () => useContext(PlannerStore);

export { PlannerProvider, usePlannerStore };
