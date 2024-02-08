import { useState } from "react";

const Chai = (props) => {
  const [counter, setCounter] = useState(11);

  const addCounter = () => {
    if (counter !== 20) {
      setCounter(counter + 1);
    }
  };

  const removeCounter = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      Hello Chai, pIlo
      <hr></hr>
      <main>counter : {counter}</main>
      <button onClick={addCounter}>Increase {counter}</button>
      <button onClick={removeCounter}>Descrease {counter}</button>
      <hr></hr>
      <footer>Footer :--- {counter}</footer>
    </div>
  );
};

export default Chai;
