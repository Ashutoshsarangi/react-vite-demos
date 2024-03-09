import TestChild from "./MultiplyByFive/TestChild";
import MultiplyByFive from "./MultiplyByFive/MultiplyByFive";

const MultiplyByFiveWrapper = (props) => {
  return (
    <div>
      <hr></hr>
      <TestChild />
      <MultiplyByFive />
    </div>
  );
};

export default MultiplyByFiveWrapper;
