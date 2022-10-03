import React from 'react';

export const Colour = ({ color, setColor }) => {
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <form required onSubmit={(event) => event.preventDefault()}>
      <p>
        Choose the colour of the confetti:
      </p>
      <input type="color" className="colorPicker" tabIndex="0" value={color} onChange={handleColorChange} />
    </form>
  );
};