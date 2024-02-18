import { createContext, useContext, useReducer } from 'react';
import { PlannerAction } from '../Actions/Planner';
import { PlannerState, plannerReducer } from '../Reducers/Planner';

interface PlannerStore {
  state: PlannerState;
  dispatch: React.Dispatch<PlannerAction>;
}

export const initialState: PlannerState = {
  totalAmt: 0,
  percentSaved: 5,
  customPer: 0,
  curDay: 1,
  lastDay: 31,
  result: 0,
  resultDaily: 0,
};

const PlannerStore = createContext({} as PlannerStore);

function PlannerProvider({ children }: React.PropsWithChildren) {
  const [state, dispatch] = useReducer(plannerReducer, initialState);

  return (
    <PlannerStore.Provider value={{ state, dispatch }}>
      {children}
    </PlannerStore.Provider>
  );
}

const usePlannerStore = () => useContext(PlannerStore);

export { PlannerProvider, usePlannerStore };
