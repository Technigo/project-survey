import React from 'react';
// eslint-disable-next-line indent
        // eslint-disable-next-line indent

export const MagicCrystalSelect = ({ magicCrystalSelect, setMagicCrystalSelect }) => {
  return (
    <form className="content-wrapper">
      <p>Which of these magic crystals speaks to you the most 💎 ?</p>
      <select
        className="dropDown"
        onChange={(event) => setMagicCrystalSelect(event.target.value)}
        value={magicCrystalSelect}>
        <option value="Amethyst">Amethyst</option>
        <option value="Carnelian">Carnelian</option>
        <option value="Diamond">Diamond</option>
        <option value="Sapphire">Sapphire</option>
        <option value="Amber">Amber</option>
      </select>
    </form>
  )
}

