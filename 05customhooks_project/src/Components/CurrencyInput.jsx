import { useId } from "react";
import { useCurrencyConverter } from "../Hooks/useCurrencyConverter";

const CurrencyInput = (props) => {
  const { inputLabel } = props;
  const inputId = useId();
  const currencyData = useCurrencyConverter("usd");

  console.log("currencyData ----> ", currencyData);

  return (
    <div>
      <label htmlFor={inputId}>{inputLabel}</label>
      <input type="text" id={inputId} />
      <label>Currency Type</label>
      <select>
        <option value="usd">usd</option>
      </select>
    </div>
  );
};

export default CurrencyInput;
