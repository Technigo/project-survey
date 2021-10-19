import React from 'react'

const FavouriteAnimal = ({animalInput, onAnimalInputChange, onstepChange}) => {
    return (
        <form>
        <label htmlFor="AnimalInput">What is the name of your favourite animal</label>
          <input 
              id="AnimalInput"
              type="text" 
              value={animalInput} 
              onChange={onAnimalInputChange}
             
            />
        <button onClick = {onstepChange}>To overview</button>
        </form>
    
    )
}

export default FavouriteAnimal