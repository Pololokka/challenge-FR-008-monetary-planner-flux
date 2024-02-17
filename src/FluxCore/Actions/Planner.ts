export type PlannerActionsType =
  | 'setTotalAmt'
  | 'setPercentSaved'
  | 'setCustomPer'
  | 'setCurDay'
  | 'setLastDay'
  | 'setResult'
  | 'setResultDaily';

export interface PlannerAction {
  type: PlannerActionsType;
  payload?: any;
}

export const plannerActions = {
  setTotalAmt: (totalAmt: number) =>
    ({ type: 'setTotalAmt', payload: totalAmt }) as PlannerAction,
  setPercentSaved: (percentSaved: number) =>
    ({ type: 'setPercentSaved', payload: percentSaved }) as PlannerAction,
  setCustomPer: (customPer: number) =>
    ({ type: 'setCustomPer', payload: customPer }) as PlannerAction,
  setCurDay: (curDay: number) =>
    ({ type: 'setCurDay', payload: curDay }) as PlannerAction,
  setLastDay: (lastDay: number) =>
    ({ type: 'setLastDay', payload: lastDay }) as PlannerAction,
  setResult: (result: number) =>
    ({ type: 'setResult', payload: result }) as PlannerAction,
  setResultDaily: (resultDaily: number) =>
    ({ type: 'setResultDaily', payload: resultDaily }) as PlannerAction,
};
