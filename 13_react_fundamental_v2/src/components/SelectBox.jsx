import { useId } from "react";

const SelectBox = ({ user, handleChange }) => {
  const vegetableSelectId = useId();

  return (
    <div>
      <label htmlFor={vegetableSelectId}>Pick a vegetable:</label>
      <select
        id={vegetableSelectId}
        name="selectedVegetable"
        value={user?.vegitable}
        onChange={handleChange}
      >
        <option value="NA">Select a vagitable</option>
        <option value="cucumber">Cucumber</option>
        <option value="corn">Corn</option>
        <option value="tomato">Tomato</option>
      </select>
    </div>
  );
};

export default SelectBox;
