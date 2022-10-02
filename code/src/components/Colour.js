import React from 'react';

export const Colour = ({ color, setColor }) => {
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <form required onSubmit={(event) => event.preventDefault()}>
      <h2>
        Choose the colour of the confetti:
      </h2>
      <input type="color" className="colorPicker" value={color} onChange={handleColorChange} tabIndex="0" />
    </form>
  );
};