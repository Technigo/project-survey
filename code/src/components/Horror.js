import React from 'react';

export const Horror = ({ horror, setHorror }) => {
  const handleHorrorChange = (event) => {
    setHorror(event.target.value);
  }
  return (
    <div>
      <p>What is the worst thing you can image?</p>
      <form>
        <select
          onChange={handleHorrorChange}
          value={horror}>
          <option value="">Select horror:</option>
          <option value="smalltalk">Being forced to make smalltalk with a stranger</option>
          <option value="word puns">Listening to puns</option>
          <option value="oslo">Oslo</option>
        </select>
      </form>
    </div>
  )
}