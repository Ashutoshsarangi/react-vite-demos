import Button from "./Component/Button";
import Button1 from "./ReactElement/Button1";

function App() {
  return (
    <>
      <Button />
      <Button1 />
      {/* For React Element we need to wrap it in a function and we need to share it to the other
      components for rendering together */}
    </>
  );
}

export default App;
