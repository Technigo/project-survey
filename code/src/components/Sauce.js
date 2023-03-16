import React from 'react';

export const Sauce = ({ sauce, setSauce }) => {
  return (
    <>
      <p>I could not live without:</p>
      <label htmlFor="sauce-slider">
        <input
          type="range"
          min="0"
          max="3"
          list="marks"
          id="sauce-slider"
          className="slider"
          defaultValue={0}
          checked={sauce}
          onChange={(event) => setSauce(event.target.value)} />
      </label>
      <datalist id="marks">
        <option value="0" label="Select a Sauce" />
        <option value="1" label="Hot Sauce" />
        <option value="2" label="Mayo" />
        <option value="3" label="Neither" />
      </datalist>
    </>
  )
}

// <a href="https://www.flaticon.com/free-icons/sauces" title="sauces icons">Sauces icons created by iconixar - Flaticon</a>