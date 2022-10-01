import React from 'react';

export const Colour = ({ color, setColor }) => {
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <form>
      <p>
        Choose the colour of the confetti:
      </p>
      <input type="color" className="colorPicker" value={color} onChange={handleColorChange} />
    </form>
  );
};