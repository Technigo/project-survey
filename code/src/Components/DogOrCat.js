import React from 'react'
import { useState } from 'react'

export const DogOrCat = () => {
  const [animalLover, setAnimalLover] = useState('');

  return (
    <form>
      <select
        onChange={event => setAnimalLover(event.target.value)}
        value={animalLover}
        >
          <option value= "">Select option:</option>
          <option value= "dogs">Dog Lover <span role="img" aria-label="dog emoji">🐶</span></option>
          <option value= "cats">Cat Lover <span role="img" aria-label="cat emoji">🐱</span></option>
          <option value= "hatesAnimals">No animals! <span role="img" aria-label="poop emoji">💩</span></option>
          <option value= "hamsters">Hamsters! <span role="img" aria-label="hamster emoji">🐹</span></option>
      </select>
    </form>
    
    
  )
}