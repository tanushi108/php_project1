// src/Matrix.js
import React, { useState } from 'react';
import './Matrix.css'; // Import CSS for styling

const Matrix = () => {
  const [colors, setColors] = useState(Array(9).fill('')); // Initialize a 3x3 matrix with empty strings
  const [clicks, setClicks] = useState([]); // Store the order of clicks

  const handleClick = (index) => {
    if (index === 8) { // If the last box is clicked
      // Change all previously clicked boxes to orange in sequence
      const newColors = [...colors];
      clicks.forEach((click, i) => {
        setTimeout(() => {
          newColors[click] = 'orange';
          setColors([...newColors]);
        }, i * 1000); // Change color every second
      });
    } else {
      // Change the clicked box to green
      const newColors = [...colors];
      newColors[index] = 'green';
      setColors(newColors);
      setClicks([...clicks, index]); // Store the click index
    }
  };

  return (
    <div className="matrix">
      {colors.map((color, index) => (
        <div
          key={index}
          className="box"
          style={{ backgroundColor: color }}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Matrix;