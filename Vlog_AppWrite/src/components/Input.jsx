import { useId, forwardRef } from "react";
const Input = forwardRef(
  ({ label, type = "text", className = "", ...props }, ref) => {
    const id = useId();
    return (
      <div>
        {label && <label htmlFor={id}>{label}</label>}
        <input
          type={type}
          className={`${className}`}
          ref={ref}
          id={id}
          {...props}
        />
      </div>
    );
  }
);

export default Input;
