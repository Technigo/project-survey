import React from 'react';

const SweetOrSalty = ({ sweetSalt, setSweetSalt }) => {
  return (
    <form>
      <p>Choose a taste</p>
      <select
        onChange={(event) => setSweetSalt(event.target.value)}
        value={sweetSalt}>
        <option value="" disabled>Select value:</option>
        <option value="sweet">Sweet</option>
        <option value="salty">Salty</option>
      </select>
    </form>
  )
}

export default SweetOrSalty;