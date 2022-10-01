import React from 'react';

export const Colour = ({ color, setColor }) => {
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <form>
      <p>
        What is your favourite color?
      </p>
      <input type="color" className="colorPicker" value={color} onChange={handleColorChange} />
    </form>
  );
};