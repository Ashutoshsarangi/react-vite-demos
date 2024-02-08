import { createElement } from "react";

const Button1Element = createElement(
  "button",
  {
    alt: "This is a button",
    onClick: () => {
      console.log("Hello");
    },
  },
  "My Button With React Element"
);

const Button1 = () => Button1Element;

export default Button1;
