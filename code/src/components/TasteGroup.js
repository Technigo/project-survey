import React from 'react';
import SnacksArray from './SnacksArray';

const TasteGroup = ({ tasteGroup, setTasteGroup }) => {
  const uniqueTastes = [...new Set(SnacksArray.map((snack) => snack.taste))];

  if (!tasteGroup) {
    [tasteGroup] = uniqueTastes;
    setTasteGroup(tasteGroup);
  }

  const handleTasteChoice = (event) => {
    setTasteGroup(event.target.value)
  }
  (console.log({ tasteGroup }))
  return (
    <div className="tasteGroup-container">
      <h3>First, please pick a taste.</h3>
      <form>
        {uniqueTastes.map((taste) => (
          <label
            htmlFor="tasteGroup"
            className={tasteGroup === taste ? 'selected' : ''}
            key={taste}>
            <input
              type="radio"
              value={taste}
              onChange={handleTasteChoice}
              checked={tasteGroup === taste} />
            <span
              role="button"
              tabIndex={0}
              onClick={() => setTasteGroup(taste)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setTasteGroup(taste);
                }
              }}>
              {taste}
            </span>
          </label>
        ))}
      </form>
    </div>
  )
}

export default TasteGroup;