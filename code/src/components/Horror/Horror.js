import React from 'react';
import './horror.css';
import pineapple from '../../images/pinapple.png'
import snake from '../../images/snake.png'
import plane from '../../images/plane.png'

export const Horror = ({ horror, setHorror, handleStepIncrease }) => {
  const handleHorrorChange = (event) => {
    setHorror(event.target.value);
  }
  return (
    <div className="horror-container">
      <h1 className="question-text">What is the worst thing you can image?</h1>

      <div className="image-container-horror">
        <img src={snake} alt="snake" />
        <img src={pineapple} alt="pineapple" />
        <img src={plane} alt="airplane" />
      </div>

      <form label htmlFor="horror">
        <select
          onChange={handleHorrorChange}
          value={horror}>
          <option value="">Select horror:</option>
          <option value="snakes">Being pushed into a snake pit.</option>
          <option value="pinapple">Pinapple on pizza.</option>
          <option value="airplane">Falling out of an airplane.</option>
        </select>
      </form>
      <div className="container-step-btn">
        <button
          className="step-btn"
          type="button"
          onClick={handleStepIncrease}
          disabled={horror === ''}> Next
        </button>
      </div>
    </div>
  )
}