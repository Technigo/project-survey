import React from 'react';

const TextureSavorySalty = ({ tasteGroup, texture, setTexture }) => {
  if (tasteGroup === ('Savory')) {
    return (
      <form>
        <p>Choose a texture</p>
        <select
          onChange={(event) => setTexture(event.target.value)}
          value={texture}>
          <option value="" disabled>Texture</option>
          <option value="Chewy">Chewy</option>
          <option value="Crunchy">Crunchy</option>
        </select>
      </form>
    )
  } else if (tasteGroup === ('Salty')) {
    return (
      <form>
        <p>Choose a texture</p>
        <select
          onChange={(event) => setTexture(event.target.value)}
          value={texture}>
          <option value="" disabled>Texture</option>
          <option value="Chewy">Chewy</option>
          <option value="Crispy">Crispy</option>
          <option value="Soft">Soft</option>
        </select>
      </form>
    )
  }
}

export default TextureSavorySalty;