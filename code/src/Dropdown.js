import React from 'react'

export const Dropdown = ( {handleDropInput} ) => {
    return <div>
    <label htmlFor="Movie">Choose a Movie:</label>
  
  <select name="Movie" id="Movie" onChange={e => handleDropInput(e.target.value)}>
    <option value="Select">Select a Movie</option>
    <option value="Top Gun">Top Gun</option>
    <option value="Heat">Heat</option>
    <option value="Gladiator">Gladiator</option>
  </select>
    </div>
  }