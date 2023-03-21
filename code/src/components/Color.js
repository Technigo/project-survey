/* eslint-disable linebreak-style */
import React from 'react';

const colorOptions = ['red', 'yellow', 'pink', 'green', 'orange', 'violet', 'blue'];

export const Color = ({ color, setColor }) => {
  const handleColorChange = (event) => {
    setColor(event.target.value);
  }
  return (
    <form>
      <p>Pick a color.</p>
      <div className="color-options">
        {colorOptions.map((colorType) => (
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label key={colorType}>
            {colorType}
            <input
              type="radio"
              value={colorType}
              onChange={handleColorChange}
              checked={color === colorType}
              required />
          </label>
        ))}
      </div>
    </form>
  );
}