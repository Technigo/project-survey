import React from 'react';

const TextureSweetSour = ({ tasteGroup, texture, setTexture }) => {
  if (tasteGroup === ('Sweet') || (tasteGroup === ('Sour'))) {
    return (
      <form>
        <p>Choose a texture</p>
        <select
          onChange={(event) => setTexture(event.target.value)}
          value={texture}>
          <option value="" disabled>Texture</option>
          <option value="Soft">Soft</option>
          <option value="Chewy">Chewy</option>
          <option value="Crunchy">Crunchy</option>
        </select>
      </form>
    )
  }
}

export default TextureSweetSour;