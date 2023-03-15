import React from 'react';
import './place.css';

export const Place = ({ place, setPlace, handleStepIncrease }) => {
  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  }
  return (
    <div className="place-container">
      <p>Which place do you prefer?</p>
      <form>
        <select
          onChange={handlePlaceChange}
          value={place}>
          <option value="">Select location:</option>
          <option value="stockholm">Stockholm</option>
          <option value="barcelona">Barcelona</option>
          <option value="oslo">Oslo</option>
        </select>
      </form>
      <div>
        <button className="step-btn" type="button" onClick={handleStepIncrease}>Next</button>
      </div>
    </div>
  )
}