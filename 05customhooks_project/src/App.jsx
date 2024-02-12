import { CurrencyInput } from "./Components";
import "./App.css";

function App() {
  return (
    <>
      <CurrencyInput inputLabel="From" />
      <hr></hr>
      <button>Swap</button>
      <hr></hr>
      <CurrencyInput inputLabel="To" />
    </>
  );
}

export default App;
