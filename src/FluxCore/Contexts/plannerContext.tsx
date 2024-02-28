import { createContext, useContext, useReducer } from 'react';
import { PlannerAction } from '../Actions/Planner';
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
  isCustomValue: false,
  customPercentValue: 35,
  result: { saving: 0, daily: 0 },
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
