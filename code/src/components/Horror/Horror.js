import React from 'react';

export const Horror = ({ horror, setHorror, handleStepIncrease }) => {
  const handleHorrorChange = (event) => {
    setHorror(event.target.value);
  }
  return (
    <div className="horror-container">
      <p>What is the worst thing you can image?</p>
      <form>
        <select
          onChange={handleHorrorChange}
          value={horror}>
          <option value="">Select horror:</option>
          <option value="snakes">Being pushed into a snake pit.</option>
          <option value="pinapple">Pinapple on pizza.</option>
          <option value="airplane">Falling out of an airplane.</option>
        </select>
      </form>
      <div>
        <button className="step-btn" type="button" onClick={handleStepIncrease}>Next</button>
      </div>
    </div>
  )
}