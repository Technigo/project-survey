import React from 'react';

const tasteGroups = ['Sweet', 'Sour', 'Savory', 'Salty'];

const TasteGroup = ({ tasteGroup, setTasteGroup }) => {
  const handleTasteChoice = (event) => {
    setTasteGroup(event.target.value)
  }
  return (
    <>
      <h3>What taste would you like to see more of?</h3>
      <form>
        {tasteGroups.map((tasteChoice) => (
          <label
            htmlFor="tasteGroup"
            key={tasteChoice}>
            <input
              type="radio"
              value={tasteChoice}
              onChange={handleTasteChoice}
              checked={tasteGroup === tasteChoice} />
            {tasteChoice}
          </label>
        ))}
      </form>
    </>
  )
}

export default TasteGroup;