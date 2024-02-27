export type PlannerActionsType =
  | 'setTotalAmt'
  | 'setPercentSaved'
  | 'setCurDay'
  | 'setLastDay'
  | 'setResult';

export interface PlannerAction {
  type: PlannerActionsType;
  payload?: any;
}

export const plannerActions = {
  setTotalAmt: (totalAmt: number) =>
    ({ type: 'setTotalAmt', payload: totalAmt }) as PlannerAction,
  setPercentSaved: (percentSaved: number) =>
    ({ type: 'setPercentSaved', payload: percentSaved }) as PlannerAction,
  setCurDay: (curDay: number) =>
    ({ type: 'setCurDay', payload: curDay }) as PlannerAction,
  setLastDay: (lastDay: number) =>
    ({ type: 'setLastDay', payload: lastDay }) as PlannerAction,
  setResult: () => ({ type: 'setResult' }) as PlannerAction,
};
