/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import styled from 'styled-components/macro';

const colorOptions = ['red', 'yellow', 'pink', 'green', 'orange', 'violet', 'blue'];

export const Color = ({ color, setColor }) => {
  const handleColorChange = (event) => {
    setColor(event.target.value);
  }
  const ColorForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;
  gap: 5px;
  margin-top: 3px;
  ::input[type="radio"] {
    display:none;
  };
  ::label {
    display: inline-block;
    background-color: white;
    color: black;
    padding: 10px 20px;
    font-size: 16px;
    border: 2px solid black;
    border-radius: 12px;
    cursor: pointer;
    font-family: 'Audiowide', cursive;
    font-size: 21px;
  };
  ::label:hover {
    box-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
    font-size: 25px;
  }
  `
  return (
    <>
      {colorOptions.map((colorType) => (
        <ColorForm>
          <label key={colorType} className="form-label" htmlFor="color-options">
            {colorType}
            <input
              id="color-options"
              name="color-options"
              type="radio"
              value={colorType}
              onChange={handleColorChange}
              checked={color === colorType}
              required />
          </label>
        </ColorForm>
      ))}
    </>
  );
}