import React from 'react'
import { useState } from 'react'

export const DogOrCat = () => {
  const [animalLover, setAnimalLover] = useState('');

  return (
    <label>
      <select
        onChange={event => setAnimalLover(event.target.value)}
        value={animalLover}
        >
          <option value= "">Select option:</option>
          <option value= "dogs">Dog Lover</option>
          <option value= "cats">Cat Lover</option>
          <option value= "hatesAnimals">No animals!</option>
          <option value= "hamsters">Hamsters!</option>
      </select>
    </label>
  )
}

{/* <option value= "">Select option:</option>
          <option value= "dogs">Dog Lover <span role="img" aria-label="dog emoji">{'\u{1F436}'}</span></option>
          <option value= "cats">Cat Lover <span role="img" aria-label="cat emoji">🐱</span></option>
          <option value= "hatesAnimals">No animals! <span role="img" aria-label="poop emoji">💩</span></option>
          <option value= "hamsters">Hamsters! <span role="img" aria-label="hamster emoji">🐹</span></option> */}