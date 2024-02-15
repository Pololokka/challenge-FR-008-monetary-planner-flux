import './App.css';

import { useState } from 'react';
import PercentButton from './Components/PercentButton/Index';

function App() {
  const [totalAmt, setTotalAmt] = useState(0);
  const [curDay, setCurDay] = useState(1);
  const [lastDay, setLastDay] = useState(31);
  const [customPer, setCustomPer] = useState(0);

  const handleWrongAmt = (
    event: React.FocusEvent<HTMLInputElement, Element>,
    setState: React.Dispatch<React.SetStateAction<number>>,
  ) => {
    const amount = event?.target?.value;
    const base = event?.target?.min;

    if (amount < base) {
      setState(parseInt(base));
    }
  };

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
            value={totalAmt || 0}
            onBlur={(event) => handleWrongAmt(event, setTotalAmt)}
            onChange={(event) => setTotalAmt(parseInt(event.target.value))}
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
            value={customPer || 0}
            onBlur={(event) => handleWrongAmt(event, setCustomPer)}
            onChange={(event) => setCustomPer(parseInt(event.target.value))}
          />
          <PercentButton percent={String(customPer)} name="custom" />
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
            value={curDay || 1}
            onBlur={(event) => handleWrongAmt(event, setCurDay)}
            onChange={(event) => setCurDay(parseInt(event.target.value))}
          />

          <label className="text" htmlFor="lastDay">
            Último dia do mês:
          </label>
          <select
            name="lastDay"
            className="input-text"
            id="lastDay"
            onChange={(event) => setLastDay(parseInt(event.target.value))}
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
