import React from 'react';
import './place.css';
import mountain1 from '../../images/mountains1.png'
import forest from '../../images/forest.png'
import stars from '../../images/stars.png'

export const Place = ({ place, setPlace, handleStepIncrease }) => {
  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  }

  return (
    <div className="place-container">
      <p className="question-text">Which place do you prefer?</p>
      <div className="image-container-place">
        <img src={forest} alt="forest" />
        <img src={mountain1} alt="mountain" />
        <img src={stars} alt="starry night in forest" />
      </div>
      <form>
        <select
          onChange={handlePlaceChange}
          value={place}>
          <option value="" disabled>Select location</option>
          <option value="forest">A green forest</option>
          <option value="mountain">A stunning mountain valley</option>
          <option value="stars">A magical kingdom</option>
        </select>
      </form>
      <div className="container-step-btn">
        <button
          className="step-btn"
          type="button"
          onClick={handleStepIncrease}
          disabled={place === ''}> Next
        </button>
      </div>
    </div>
  )
}