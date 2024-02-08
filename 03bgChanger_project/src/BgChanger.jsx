import { useState } from "react";

const BgChanger = () => {
  const [color, setColor] = useState("red");
  const Colors = [
    {
      id: Math.random() * 100,
      name: "Red",
      value: "red",
    },
    {
      id: Math.random() * 100,
      name: "Green",
      value: "green",
    },
    {
      id: Math.random() * 100,
      name: "Yellow",
      value: "yellow",
    },
    {
      id: Math.random() * 100,
      name: "Blue",
      value: "blue",
    },
    {
      id: Math.random() * 100,
      name: "Pink",
      value: "pink",
    },
    {
      id: Math.random() * 100,
      name: "Olive",
      value: "olive",
    },
    {
      id: Math.random() * 100,
      name: "White",
      value: "white",
    },
    {
      id: Math.random() * 100,
      name: "Black",
      value: "black",
    },
  ];
  return (
    <div
      style={{
        backgroundColor: `${color}`,
        height: "500px",
        width: "500px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        {Colors.map((colorValue) => {
          return (
            <button
              key={colorValue.id}
              onClick={() => setColor(colorValue.value)}
              style={{ backgroundColor: `${colorValue.value}` }}
            >
              {colorValue.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BgChanger;
