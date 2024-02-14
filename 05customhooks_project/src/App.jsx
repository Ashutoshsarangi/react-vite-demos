import { useState } from "react";
import { CurrencyInput } from "./Components";
import { useCurrencyConverter } from "./Hooks/useCurrencyConverter";
import "./App.css";

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyConverter(from);
  const currencyOptions = Object.keys(currencyInfo);

  const convertCurrency = () => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  return (
    <>
      <CurrencyInput
        inputLabel="From"
        selectedCurrency={from}
        currencyChange={setFrom}
        currencyOptions={currencyOptions}
        amount={amount}
        setAmount={setAmount}
      />
      <hr></hr>
      <button onClick={swap}>Swap</button>
      <hr></hr>
      <CurrencyInput
        inputLabel="To"
        selectedCurrency={to}
        currencyChange={setTo}
        currencyOptions={currencyOptions}
        amount={convertedAmount}
        setAmount={setConvertedAmount}
      />
      <hr></hr>
      <button
        onClick={convertCurrency}
      >{`Convert ${from.toUpperCase()} to ${to.toLocaleLowerCase()}`}</button>
    </>
  );
}

export default App;
