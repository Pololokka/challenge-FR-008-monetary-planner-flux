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
    <div className="button-style">
      <input
        type="radio"
        name="percentRadio"
        id={name}
        onClick={() => handleChangePercent(parseInt(percent))}
      />
      <label htmlFor={name} className="text button-label">
        {name || percent} %
      </label>
    </div>
  );
};

export default PercentButton;
