import React from 'react';

export const Sauce = ({ sauce, setSauce }) => {
  <datalist id="marks">
    <option value="hot sauce" label="Hot Sauce" />
    <option value="neither" label="Neither" />
    <option value="mayo" label="Mayo" />
  </datalist>
  return (
    <>
      {/* I could not live without: */}
      <label htmlFor="sauce-slider">
        <input
          type="range"
          min="1"
          max="3"
          list="marks"
          id="sauce-slider"
          defaultValue={2}
          checked={sauce}
          onChange={(event) => setSauce(event.target.value)} />
      </label>
      <datalist id="marks">
        <option value="1" label="Hot Sauce" />
        <option value="2" label="Ew!" />
        <option value="3" label="Mayo" />
      </datalist>
    </>
  )
}