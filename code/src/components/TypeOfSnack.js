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
      <div className="TypeComp">
        <h3>What type of snack would you prefer?</h3>
        <form>
          {uniqueTypes.map((typeChoice) => (
            <label
              className={type === typeChoice ? 'selected' : ''}
              htmlFor="type"
              key={typeChoice}>
              <input
                type="radio"
                value={typeChoice}
                onChange={handleTypeChoice}
                checked={type === typeChoice} />
              <span
                role="button"
                tabIndex={0}
                onClick={() => setType(typeChoice)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setType(typeChoice);
                  }
                }}>
                {typeChoice}
              </span>
            </label>
          ))}
        </form>
      </div>
    )
  } else if (tasteGroup === ('sour')) {
    return (
      <div>
        <h3>What type of snack would you prefer?</h3>
        <form>
          {uniqueTypes.map((typeChoice) => (
            <label
              className={type === typeChoice ? 'selected' : ''}
              htmlFor="type"
              key={typeChoice}>
              <input
                type="radio"
                value={typeChoice}
                onChange={handleTypeChoice}
                checked={type === typeChoice} />
              <span
                role="button"
                tabIndex={0}
                onClick={() => setType(typeChoice)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setType(typeChoice);
                  }
                }}>
                {typeChoice}
              </span>
            </label>
          ))}
        </form>
      </div>
    )
  } else if (tasteGroup === ('savory')) {
    return (
      <div>
        <h3>What type of snack would you prefer?</h3>
        <form>
          {uniqueTypes.map((typeChoice) => (
            <label
              className={type === typeChoice ? 'selected' : ''}
              htmlFor="type"
              key={typeChoice}>
              <input
                type="radio"
                value={typeChoice}
                onChange={handleTypeChoice}
                checked={type === typeChoice} />
              <span
                role="button"
                tabIndex={0}
                onClick={() => setType(typeChoice)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setType(typeChoice);
                  }
                }}>
                {typeChoice}
              </span>
            </label>
          ))}
        </form>
      </div>
    )
  } else if (tasteGroup === ('salty')) {
    return (
      <div>
        <h3>What type of snack would you prefer?</h3>
        <form>
          {uniqueTypes.map((typeChoice) => (
            <label
              className={type === typeChoice ? 'selected' : ''}
              htmlFor="type"
              key={typeChoice}>
              <input
                type="radio"
                value={typeChoice}
                onChange={handleTypeChoice}
                checked={type === typeChoice} />
              <span
                role="button"
                tabIndex={0}
                onClick={() => setType(typeChoice)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setType(typeChoice);
                  }
                }}>
                {typeChoice}
              </span>
            </label>
          ))}
        </form>
      </div>
    )
  }
}

export default TypeOfSnack;