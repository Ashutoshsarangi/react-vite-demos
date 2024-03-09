import {
  CheckBox,
  RadioBtn,
  SingleFileUpload,
  MultipleFileUpload,
  MultiplyByFiveWrapper,
  SelectBox,
} from "./components";
import { useFormInputs } from "./App.hook";

function App() {
  const { user, updateCheckBox, updateRadioBtn, handleChange } =
    useFormInputs();

  return (
    <>
      <h1> useRef -- Demo - see the code in useEffect</h1>
      <CheckBox user={user} updateCheckBox={updateCheckBox} />
      <RadioBtn {...{ user, updateRadioBtn }} />
      <SelectBox {...{ user, handleChange }} />
      {user.fileUpload === "singleFileUpload" && <SingleFileUpload />}
      {user.fileUpload === "multipleFileUpload" && <MultipleFileUpload />}
      <MultiplyByFiveWrapper />
    </>
  );
}

export default App;
