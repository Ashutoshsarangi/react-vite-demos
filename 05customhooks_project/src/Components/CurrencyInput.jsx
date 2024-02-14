import { useId } from "react";

const CurrencyInput = (props) => {
  const {
    inputLabel,
    selectedCurrency,
    currencyOptions,
    amount,
    setAmount,
    currencyChange,
  } = props;
  const inputId = useId();

  return (
    <div>
      <label htmlFor={inputId}>{inputLabel}</label>
      <input
        type="text"
        id={inputId}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <label>Currency Type</label>
      <select
        value={selectedCurrency}
        onChange={(e) => currencyChange(e.target.value)}
      >
        {currencyOptions.map((curr) => {
          return (
            <option value={curr} key={`${curr}-${inputId}`}>
              {curr}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CurrencyInput;
