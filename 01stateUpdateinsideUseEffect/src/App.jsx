import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Only called Once", count);
    setCount(3);
    // when I will add count + 1 here inside setCount It will go for Infanite loop
    // It will keep on re-rendering
    // But when i use 3 then there is no difference in render tree so it will not re-render
  }, [count]);

  return (
    <h1>
      Hello This is checking how useEffect renders when we update state inside
      useEffect scenarios:------- {count}
    </h1>
  );
}

export default App;
