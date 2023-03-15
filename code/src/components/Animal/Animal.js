import React from 'react';
import './animal.css';

export const Animal = ({ animal, setAnimal, handleStepIncrease }) => {
  const handleAnimalChange = (event) => {
    setAnimal(event.target.value);
  }
  return (
    <div className="animal-container">
      <p>What animal do you prefer?</p>
      <div className="form-container">
        <form>
          <label htmlFor="duck">
        Duck
            <input
              type="radio"
              value="duck"
              onChange={handleAnimalChange}
              checked={animal === 'duck'} />
          </label>

          <label htmlFor="frog">
        Frog
            <input
              type="radio"
              value="frog"
              onChange={handleAnimalChange}
              checked={animal === 'frog'} />
          </label>
        </form>
      </div>
      <div>
        <button className="step-btn" type="button" onClick={handleStepIncrease}>Next</button>
      </div>
    </div>
  )
}