import React from 'react';
import SnacksArray from './SnacksArray';

const Texture = ({ tasteGroup, type, texture, setTexture }) => {
  const handleTextureChoice = (event) => {
    setTexture(event.target.value);
  };
  const filteredTasteType = SnacksArray.filter(
    (snack) => snack.taste === tasteGroup && snack.type === type
  );
  const uniqueTextures = [...new Set(filteredTasteType.map((snack) => snack.texture))];
  console.log({ uniqueTextures })
  if (type === ('candy')) {
    return (
      <>
        <h3>What texture</h3>
        <form>
          {uniqueTextures.map((textureChoice) => (
            <label
              htmlFor="type"
              key={textureChoice}>
              <input
                type="radio"
                value={textureChoice}
                onChange={handleTextureChoice}
                checked={texture === textureChoice} />
              {textureChoice}
            </label>
          ))}
        </form>
      </>
    )
  } else if (type === ('nut')) {
    return (
      <>
        <h3>What texture</h3>
        <form>
          {uniqueTextures.map((textureChoice) => (
            <label
              htmlFor="type"
              key={textureChoice}>
              <input
                type="radio"
                value={textureChoice}
                onChange={handleTextureChoice}
                checked={texture === textureChoice} />
              {textureChoice}
            </label>
          ))}
        </form>
      </>
    )
  } else if (type === ('fruit')) {
    return (
      <>
        <h3>What texture</h3>
        <form>
          {uniqueTextures.map((textureChoice) => (
            <label
              htmlFor="type"
              key={textureChoice}>
              <input
                type="radio"
                value={textureChoice}
                onChange={handleTextureChoice}
                checked={texture === textureChoice} />
              {textureChoice}
            </label>
          ))}
        </form>
      </>
    )
  } else if (type === ('chips')) {
    return (
      <>
        <h3>What texture</h3>
        <form>
          {uniqueTextures.map((textureChoice) => (
            <label
              htmlFor="type"
              key={textureChoice}>
              <input
                type="radio"
                value={textureChoice}
                onChange={handleTextureChoice}
                checked={texture === textureChoice} />
              {textureChoice}
            </label>
          ))}
        </form>
      </>
    )
  }
}

export default Texture;