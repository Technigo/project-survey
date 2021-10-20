import React from 'react'

const FavouriteAnimal = ({animalInput, onAnimalInputChange, onstepChange}) => {
    return (
        <form className="form-container">
        <label htmlFor="AnimalInput">Which of these animals do you like the best?</label>
          <select 
              id="AnimalInput"
              value={animalInput} 
              onChange={onAnimalInputChange}>
                <option disabled value=''>Select an option:</option>
                <option value="Dolphin" selected>Dolphin</option>
                <option value="Shark" selected>Shark</option>
                <option value="Tiger" selected>Tiger</option>
                <option value="Koala" selected>Koala</option>
                <option value="Unicorn" selected>Unicorn</option>
                <option value="Penguin" selected>Penguin</option>
            </select>
        <button onClick = {onstepChange}>Next Question</button>
        </form>
    
    )
}

export default FavouriteAnimal