import './Styles.css';

import { plannerActions } from '../../FluxCore/Actions/Planner';
import { usePlannerStore } from '../../FluxCore/Contexts/plannerContext';

const PercentButton = ({
  percent,
  name,
}: {
  percent: string;
  name?: string;
}) => {
  const { dispatch } = usePlannerStore();

  const handleChangePercent = (percentSaved: number) => {
    dispatch(plannerActions.setPercentSaved(percentSaved));
  };

  return (
    <button
      className="text button-style"
      onClick={() => handleChangePercent(parseInt(percent))}
    >
      {name || percent} %
    </button>
  );
};

export default PercentButton;
