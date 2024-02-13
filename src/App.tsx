import { useState } from 'react';
import './App.css';

function App() {
  const [totalAmt, setTotalAmt] = useState(0);
  const [savePer, setSavePer] = useState(5);
  const [curDay, setCurDay] = useState(1);
  const [lastDay, setLastDay] = useState(31);

  const handleNegativeAmt = (
    amount: number,
    setState: React.Dispatch<React.SetStateAction<number>>,
  ) => {
    if (amount < 0) {
      setState(0);
    }
  };

  console.log(
    'totalAmt: ',
    totalAmt,
    '\n savePer: ',
    savePer,
    '\n curDay: ',
    curDay,
    '\n lastDay: ',
    lastDay,
  );

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
            onBlur={(event) =>
              handleNegativeAmt(parseInt(event.target.value), setTotalAmt)
            }
            onChange={(event) => setTotalAmt(parseInt(event.target.value))}
          />
        </div>

        <div className="div__inputs">
          <p className="text">Escolha quanto você quer poupar:</p>

          <button
            className="text button-style"
            name="5"
            onClick={(event) => setSavePer(parseInt(event.target.name))}
          >
            5%
          </button>

          <button
            className="text button-style"
            name="10"
            onClick={(event) => setSavePer(parseInt(event.target.name))}
          >
            10%
          </button>
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
            onBlur={(event) =>
              handleNegativeAmt(parseInt(event.target.value), setCurDay)
            }
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
            <option className="text" value={31}>
              31
            </option>
            <option className="text" value={30}>
              30
            </option>
            <option className="text" value={28}>
              28
            </option>
            <option className="text" value={29}>
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
