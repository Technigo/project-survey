import React from 'react';

const Question2 = ({ sweetSalt, flavorSweet, setFlavorSweet }) => {
  if (sweetSalt === ('sweet')) {
    return (
      <form>
        <p>Choose a flavor</p>
        <select
          onChange={(event) => setFlavorSweet(event.target.value)}
          value={flavorSweet}>
          <option value="" disabled>Select value:</option>
          <option value="strawberry">Strawberry</option>
          <option value="mixed">Mixed</option>
          <option value="banana">Banana</option>
        </select>
      </form>
    )
  } else {
    console.log('salty')
  }
}

export default Question2;