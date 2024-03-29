import { useEffect, useState } from "react";

export const useCurrencyConverter = (currency) => {
  const [currencyData, setCurrencyData] = useState({});

  useEffect(() => {
    console.log("Inside ");
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((data) => setCurrencyData(data[currency]));
  }, [currency]);

  return currencyData;
};
