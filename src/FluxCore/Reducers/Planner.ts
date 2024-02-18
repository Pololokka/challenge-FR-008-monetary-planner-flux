import { PlannerAction, PlannerActionsType } from '../Actions/Planner';

export interface PlannerState {
  totalAmt: number;
  percentSaved: number;
  customPer: number;
  curDay: number;
  lastDay: number;
  result: number;
  resultDaily: number;
}

const actionsExecutors: Record<
  PlannerActionsType,
  (state: PlannerState, payload?: any) => PlannerState
> = {
  setTotalAmt: (state: PlannerState, payload: number) => {
    return {
      ...state,
      totalAmt: payload,
    };
  },
  setPercentSaved: (state: PlannerState, payload: number) => {
    return {
      ...state,
      percentSaved: payload,
    };
  },
  setCustomPer: (state: PlannerState, payload: number) => {
    return {
      ...state,
      customPer: payload,
    };
  },
  setCurDay: (state: PlannerState, payload: number) => {
    return {
      ...state,
      curDay: payload,
    };
  },
  setLastDay: (state: PlannerState, payload: number) => {
    return {
      ...state,
      lastDay: payload,
    };
  },
  setResult: (state: PlannerState, payload: number) => {
    return {
      ...state,
      result: payload,
    };
  },
  setResultDaily: (state: PlannerState, payload: number) => {
    return {
      ...state,
      resultDaily: payload,
    };
  },
};

export function plannerReducer(state: PlannerState, action: PlannerAction) {
  if (action.type in actionsExecutors) {
    return actionsExecutors[action.type](state, action.payload);
  }

  return state;
}
