export type PlannerActionsType =
  | 'setTotalAmt'
  | 'setPercentSaved'
  | 'setCurDay'
  | 'setLastDay'
  | 'isCustom'
  | 'customPercent'
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
  isCustom: (isCustomValue: boolean) =>
    ({ type: 'isCustom', payload: isCustomValue }) as PlannerAction,
  customPercent: (customPercentValue: number) =>
    ({ type: 'customPercent', payload: customPercentValue }) as PlannerAction,

  setResult: () => ({ type: 'setResult' }) as PlannerAction,
};
