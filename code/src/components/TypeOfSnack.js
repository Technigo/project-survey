import React from 'react';
import SnacksArray from './SnacksArray';

const TypeOfSnack = ({ tasteGroup, type, setType }) => {
  const handleTypeChoice = (event) => {
    setType(event.target.value);
  };
  const filteredForTasteGroup = SnacksArray.filter((snack) => snack.taste.includes(tasteGroup));
  const uniqueTypes = [...new Set(filteredForTasteGroup.map((snack) => snack.type))];
  (console.log({ tasteGroup }))
  console.log({ uniqueTypes })
  if (tasteGroup === ('sweet')) {
    return (
      <>
        <h3>What type</h3>
        <form>
          {uniqueTypes.map((typeChoice) => (
            <label
              htmlFor="type"
              key={typeChoice}>
              <input
                type="radio"
                value={typeChoice}
                onChange={handleTypeChoice}
                checked={type === typeChoice} />
              {typeChoice}
            </label>
          ))}
        </form>
      </>
    )
  } else if (tasteGroup === ('sour')) {
    return (
      <>
        <h3>What type</h3>
        <form>
          {uniqueTypes.map((typeChoice) => (
            <label
              htmlFor="type"
              key={typeChoice}>
              <input
                type="radio"
                value={typeChoice}
                onChange={handleTypeChoice}
                checked={type === typeChoice} />
              {typeChoice}
            </label>
          ))}
        </form>
      </>
    )
  } else if (tasteGroup === ('savory')) {
    return (
      <>
        <h3>What type</h3>
        <form>
          {uniqueTypes.map((typeChoice) => (
            <label
              htmlFor="type"
              key={typeChoice}>
              <input
                type="radio"
                value={typeChoice}
                onChange={handleTypeChoice}
                checked={type === typeChoice} />
              {typeChoice}
            </label>
          ))}
        </form>
      </>
    )
  } else if (tasteGroup === ('salty')) {
    return (
      <>
        <h3>What type</h3>
        <form>
          {uniqueTypes.map((typeChoice) => (
            <label
              htmlFor="type"
              key={typeChoice}>
              <input
                type="radio"
                value={typeChoice}
                onChange={handleTypeChoice}
                checked={type === typeChoice} />
              {typeChoice}
            </label>
          ))}
        </form>
      </>
    )
  }
}

export default TypeOfSnack;