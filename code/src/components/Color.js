/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const colorOptions = [
  { label: 'Hot Pink', color: '#ff69b4' },
  { label: 'Electric Blue', color: '#00ffff' },
  { label: 'Lime Green', color: '#00ff00' },
  { label: 'Bright Orange', color: '#ff8c00' },
  { label: 'Purple Haze', color: '#8a2be2' },
  { label: 'Sunny Yellow', color: '#ffff00' },
  { label: 'Cherry Red', color: '#ff0000' },
  { label: 'Neon Green', color: '#39ff14' },
  { label: 'Turquoise', color: '#40e0d0' },
  { label: 'Magenta', color: '#ff00ff' }
];

export const Color = ({ color, setColor }) => {
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const colorStyles = colorOptions.reduce((acc, option) => {
    acc[option.label] = { backgroundColor: option.color };
    return acc;
  }, {});

  return (
    <div className="coloroptions-wrapper">
      <label className="input-label">Pick a color:
        {colorOptions.map((colorType) => (
          <label
            className="color-label"
            key={colorType.label}
            htmlFor="color-options"
            style={colorStyles[colorType.label]}>
            {colorType.label}
            <input
              id="color-options"
              name="color-options"
              type="radio"
              key={colorType.label}
              value={colorType.label}
              onChange={handleColorChange}
              checked={color === colorType.label}
              required />
          </label>
        ))}
      </label>
    </div>
  );
};