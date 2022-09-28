import React from 'react';

export const Colour = ({ color, setColor }) => {
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <p>
        What is your favourite color?
      </p>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
};