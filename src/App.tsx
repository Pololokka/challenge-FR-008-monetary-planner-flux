import './App.css';

import { useState } from 'react';
import PercentButton from './Components/PercentButton/Index';
import { usePlannerStore } from './FluxCore/Contexts/plannerContext';
import { plannerActions } from './FluxCore/Actions/Planner';

function App() {
  const { state, dispatch } = usePlannerStore();

  const [result, setResult] = useState(0);
  const [resultDaily, setResultDaily] = useState(0);

  return (
    <main>
      <div className="card">
        <h1 className="title">Planejador Monetário</h1>

        <div className="div__inputs">
          <label className="text" htmlFor="totalAmt">
            Insira o total ganho:
          </label>
          <input
            type="number"
            className="input-text"
            name="totalAmt"
            id="totalAmt"
            min={0}
            value={state.totalAmt || 0}
            onChange={(event) =>
              dispatch(plannerActions.setTotalAmt(parseInt(event.target.value)))
            }
          />
        </div>

        <div className="div__inputs">
          <p className="text">Escolha quanto você quer poupar:</p>

          <PercentButton percent={'5'} />
          <PercentButton percent={'10'} />
          <PercentButton percent={'15'} />

          <label className="text" htmlFor="customPer">
            Valor Custom
          </label>
          <input
            type="number"
            className="input-text"
            name="customPer"
            id="customPer"
            min={1}
            max={100}
            value={state.customPer || 0}
            onChange={(event) =>
              dispatch(
                plannerActions.setCustomPer(parseInt(event.target.value)),
              )
            }
          />
          <PercentButton percent={String(state.customPer)} name="custom" />
        </div>

        <div className="div__inputs">
          <label className="text" htmlFor="curDay">
            Dia atual do mês:
          </label>
          <input
            type="number"
            className="input-text"
            name="curDay"
            id="curDay"
            min={1}
            max={31}
            value={state.curDay || 1}
            onChange={(event) =>
              dispatch(plannerActions.setCurDay(parseInt(event.target.value)))
            }
          />

          <label className="text" htmlFor="lastDay">
            Último dia do mês:
          </label>
          <select
            name="lastDay"
            className="input-text"
            id="lastDay"
            onChange={(event) =>
              dispatch(plannerActions.setLastDay(parseInt(event.target.value)))
            }
          >
            <option className="input-text" value={31}>
              31
            </option>
            <option className="input-text" value={30}>
              30
            </option>
            <option className="input-text" value={28}>
              28
            </option>
            <option className="input-text" value={29}>
              29
            </option>
          </select>
        </div>

        <h2 className="subtitle">Total que pode ser gasto por dia: X</h2>
      </div>
    </main>
  );
}

export default App;
