import React, { useState } from 'react'

const DropDown = () => {
 
  const [favorite, setFavorite]= useState()
 

return (
  <div>
    <label>Pick your favorite</label>
    <select 
    onChange={event => setFavorite(event.target.value)}
    value={favorite}
    >
      <option value='Polka'>Polka</option>
      <option value='Pineapple'>Pineapple</option>
      <option value='Salty Licorice'>Salty Licorice</option>
      <option value='Creamy Fudge'>Creamy Fudge</option>
      <option value='Nuts &#38;Crunch'> Nuts &#38; Crunch</option>
      <option value='All of the above'>All of the above!</option>
    </select>
  </div>
)
}


export default DropDown;
