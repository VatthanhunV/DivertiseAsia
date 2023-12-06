import { useState } from "react";

const ColoredSquares = () => {
  const [colors, setColors] = useState([]);

  const handleClick = () => {
    const newColors = [];
    for (let i = 0; i < 9; i++) {
      newColors.push(
        `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)})`
      );
    }
    setColors(newColors);
  };

  return (
    <div>
      <button onClick={handleClick}>Generate Colored Squares</button>
      {colors.map((color) => (
        <div
          key={color}
          style={{ backgroundColor: color, width: 50, height: 50, margin: 5 }}
        />
      ))}
    </div>
  );
};

export default ColoredSquares;
