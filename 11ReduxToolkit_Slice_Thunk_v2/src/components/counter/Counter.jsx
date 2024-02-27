import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  incrementByAmountAsync,
} from "../../store/counter/counterSlice";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const counterValue = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{counterValue.value}</p>
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button
        onClick={() => dispatch(incrementByAmount({ myValue: Number(count) }))}
      >
        Incerement By Amount
      </button>
      <button onClick={() => dispatch(incrementByAmountAsync(Number(count)))}>
        Incerement By Amount Async
      </button>
    </div>
  );
};

export default Counter;
