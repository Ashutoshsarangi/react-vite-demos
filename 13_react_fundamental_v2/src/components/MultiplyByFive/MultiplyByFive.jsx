import { useState } from "react";

const MultiplyByFive = (props) => {
  const [value, setValue] = useState(1);
  // If we change the state the MultiplyByFive will re-render from line no 4-14
  // Because of that the value will be calculated and we will show the results
  return (
    <div>
      <p>Base:- {value}</p>
      <p>Multiplication Result:- {value * 5}</p>
      <button onClick={() => setValue(value + 1)}>Multiply by 5</button>
    </div>
  );
};

export default MultiplyByFive;
