import React from 'react';
import './animal.css';
import duck from '../../images/duck-saju-dey.png'
import frog from '../../images/frog-Fadhil-Kya.png'

export const Animal = ({ animal, setAnimal, handleStepIncrease }) => {
  const handleAnimalChange = (event) => {
    setAnimal(event.target.value);
  }
  return (
    <div className="animal-container">
      <h1 className="question-text">What animal do you prefer?</h1>
      <div className="form-container">
        <div className="image-container-animal">
          <img src={duck} alt="duck" />
          <img src={frog} alt="frog" />
        </div>

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
      <div className="container-step-btn">
        <button
          className="step-btn"
          type="button"
          onClick={handleStepIncrease}
          disabled={animal === ''}> Next
        </button>
      </div>
    </div>
  )
}