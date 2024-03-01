import { forwardRef, useId } from "react";
const SelectBox = ({ options = [], value, onChange, ...props }, ref) => {
  const id = useId();
  return (
    <div>
      <select id={id} value={value} onChange={onChange} {...props}>
        {options.map((opt) => {
          return (
            <option key={opt.id} value={opt.value}>
              {opt.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default forwardRef(SelectBox);
