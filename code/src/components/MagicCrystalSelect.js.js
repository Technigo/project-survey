import React from 'react';
// eslint-disable-next-line indent
        // eslint-disable-next-line indent

export const MagicCrystalSelect = ({ magicCrystalSelect, setMagicCrystalSelect }) => {
  return (
    <form className="content-wrapper">
      <p>Which of these magic crystals speaks to you the most  ?</p>
      <select
        className="dropDown"
        onChange={(event) => setMagicCrystalSelect(event.target.value)}
        value={magicCrystalSelect}>
        <option value="amethyst">Amethyst</option>
        <option value="carnelian">Carnelian</option>
        <option value="diamond">Diamond</option>
        <option value="sapphire">Sapphire</option>
        <option value="amber">Amber</option>
      </select>
    </form>
  )
}

