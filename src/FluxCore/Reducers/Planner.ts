import { PlannerAction, PlannerActionsType } from '../Actions/Planner';

export interface PlannerState {
  totalAmt: any;
  percentSaved: number;
  curDay: number;
  lastDay: number;
  result: any;
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
  setResult: (state: PlannerState, payload: Object) => {
    const saving = state.totalAmt * (state.percentSaved / 100);

    const time = state.lastDay - state.curDay + 1;

    const daily = parseInt(((state.totalAmt - saving) / time).toFixed(2));

    payload = { saving: saving, daily: daily };

    console.log(payload);

    return {
      ...state,
      result: payload,
    };
  },
};

export function plannerReducer(state: PlannerState, action: PlannerAction) {
  if (action.type in actionsExecutors) {
    return actionsExecutors[action.type](state, action.payload);
  }

  return state;
}
