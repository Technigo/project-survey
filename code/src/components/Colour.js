import React from 'react';

export const Colour = ({ color, setColor }) => {
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <form required onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="colorPicker">
        Choose the colour of the confetti:
        <input type="color" id="colorPicker" className="colorPicker" tabIndex="0" value={color} onChange={handleColorChange} />
      </label>
    </form>

  );
};