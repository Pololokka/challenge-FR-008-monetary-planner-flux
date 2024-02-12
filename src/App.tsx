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
      <h1>Planejador Monetário</h1>

      <div>
        <label htmlFor="totalAmt">Insira o total ganho:</label>
        <input
          type="number"
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

      <div>
        <p>Escolha quanto você quer poupar:</p>

        <button
          name="5"
          onClick={(event) => setSavePer(parseInt(event.target.name))}
        >
          5%
        </button>

        <button
          name="10"
          onClick={(event) => setSavePer(parseInt(event.target.name))}
        >
          10%
        </button>
      </div>

      <div>
        <label htmlFor="curDay">Dia atual do mês:</label>
        <input
          type="number"
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

        <label htmlFor="lastDay">Último dia do mês:</label>
        <select
          name="lastDay"
          id="lastDay"
          onChange={(event) => setLastDay(parseInt(event.target.value))}
        >
          <option value={31}>31</option>
          <option value={30}>30</option>
          <option value={28}>28</option>
          <option value={29}>29</option>
        </select>
      </div>
    </main>
  );
}

export default App;
