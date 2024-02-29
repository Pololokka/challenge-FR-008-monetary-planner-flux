import './App.css';

import PercentButton from './Components/PercentButton/Index';
import { usePlannerStore } from './FluxCore/Contexts/plannerContext';
import { plannerActions } from './FluxCore/Actions/Planner';

function App() {
  const { state, dispatch } = usePlannerStore();

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

          <PercentButton percent={'5'} name="5" />
          <PercentButton percent={'10'} name="10" />
          <PercentButton percent={'15'} name="15" />
          <PercentButton percent={'20'} name="20" />
          <PercentButton percent={'30'} name="30" />

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
            value={state.customPercentValue || 0}
            onChange={(event) =>
              dispatch(
                plannerActions.customPercent(parseInt(event.target.value)),
              )
            }
          />
          <PercentButton
            percent={String(state.customPercentValue)}
            name="custom"
          />
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

        <button
          className="text button-style"
          onClick={() => dispatch(plannerActions.setResult())}
        >
          Calcular
        </button>

        <div className="card__second">
          <h2 className="subtitle">
            Total que será poupado economizando {state.percentSaved} por dia:{' '}
            {state.result.saving}
          </h2>

          <h2 className="subtitle">
            Total que pode ser gasto por dia: {state.result.daily}
          </h2>
        </div>
      </div>
    </main>
  );
}

export default App;
