import { useState, useEffect } from "react";
import "./JapaCounter.css";

const JapaCounter = (props) => {
  const [japa, setJapa] = useState({ counter: 0, mala: 0 });
  const PURE_NUMBER = 108;

  useEffect(() => {
    console.log("Only Hit Once");
    const malaFromStorage = JSON.parse(localStorage.getItem("JapaMala")) || 0;
    console.log(malaFromStorage);
    setJapa({ counter: 0, mala: malaFromStorage });
  }, []);

  const addCounter = () => {
    const { counter, mala } = japa;
    if (counter !== PURE_NUMBER) {
      setJapa({ ...japa, counter: counter + 1 });
    } else {
      const updatedMala = mala + 1;
      setJapa({ counter: 0, mala: updatedMala });
      localStorage.setItem("JapaMala", updatedMala);
    }
  };

  return (
    <div className="japaContainer">
      <div className="counter">{japa.counter}</div>
      <div>
        <div className="mala">Mala : {japa.mala}</div>
        <button className="counterIncrease" onClick={addCounter}>
          Count +{" "}
        </button>
      </div>
    </div>
  );
};

export default JapaCounter;
