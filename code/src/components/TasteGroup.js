import React from 'react';
import SnacksArray from './SnacksArray';

const TasteGroup = ({ tasteGroup, setTasteGroup }) => {
  const uniqueTastes = [...new Set(SnacksArray.map((snack) => snack.taste))];
  const handleTasteChoice = (event) => {
    setTasteGroup(event.target.value)
  }
  (console.log({ tasteGroup }))
  return (
    <>
      <h3>What taste would you like to see more of?</h3>
      <form>
        {uniqueTastes.map((taste) => (
          <label
            htmlFor="tasteGroup"
            key={taste}>
            <input
              type="radio"
              value={taste}
              onChange={handleTasteChoice}
              checked={tasteGroup === taste} />
            {taste}
          </label>
        ))}
      </form>
    </>
  )
}

export default TasteGroup;