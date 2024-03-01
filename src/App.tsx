import './App.css';

import PlannerValues from './Components/PlannerValues/Index';
import PlannerCalculations from './Components/PlannerCalculations/Index';
import PlannerShow from './Components/PlannerShow/Index';

function App() {
  return (
    <main>
      <div className="card">
        <h1 className="title">Planejador Monetário</h1>

        <PlannerValues />
        <PlannerCalculations />
        <PlannerShow />
      </div>
    </main>
  );
}

export default App;
