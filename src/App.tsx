import { useState } from 'react';
import './App.css';

function App() {
  const [totalAmt, setTotalAmt] = useState(0);

  const handleNegativeAmt = (amount: number) => {
    if (amount < 0) {
      setTotalAmt(0);
    }
  };

  const handleButton = (name: string) => {
    console.log(name);
  };

  return (
    <main>
      <h1>Planejador Monetário</h1>

      <div>
        <label htmlFor="totalAmt">Insira o total ganho</label>
        <input
          type="number"
          name="totalAmt"
          id="totalAmt"
          min={0}
          value={totalAmt || 0}
          onBlur={(event) => handleNegativeAmt(event.target.value)}
          onChange={(event) => setTotalAmt(event.target.value)}
        />
      </div>

      <div>
        <button name="5" onClick={(event) => handleButton(event.target.name)}>
          5%
        </button>

        <button name="10" onClick={(event) => handleButton(event.target.name)}>
          10%
        </button>
      </div>
    </main>
  );
}

export default App;
