import React from 'react';
// eslint-disable-next-line indent
        // eslint-disable-next-line indent

export const ColorSelect = ({ colorSelect, setColorSelect }) => {
  return (
    <form className="content-wrapper">
      <p>Which color of the rainbow makes your hair shimmer the most? 🌈 🌟 </p>
      <select
        className="dropDown"
        onChange={(event) => setColorSelect(event.target.value)}
        value={colorSelect}>
        <option value="Purple Haze">Purple Haze</option>
        <option value="Ruby red">Ruby Red</option>
        <option value="Baby Blue">Baby Blue</option>
        <option value="Sunshine Yellow">Sunshine Yellow</option>
      </select>
    </form>
  )
}

