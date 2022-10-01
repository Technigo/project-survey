/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';

// eslint-disable-next-line max-len
const HungerQuestion = ({ hungerInput, onHungerInputChange, onStepChange, onPreviousQuestionChange, onEnter }) => {
  return (
    <div className="survey-container">
      <form className="form-question">
        <label tabIndex="0" className="label-text" htmlFor="hungerInput">
          How hungry are you on a scale from full too starving?
          <input
            type="range"
            min="1"
            max="3"
            id={hungerInput}
            value={hungerInput}
            onChange={onHungerInputChange}
            onKeyPress={onEnter}
            className="slider"
            tabIndex="-1" />

          <div className="slider-text">
            <span>Full</span>
            <span>Snacky</span>
            <span>Hungry</span>
          </div>
        </label>
        <div className="button-container">
          <button className="survey-button" type="button" onClick={onPreviousQuestionChange}>Back</button>
          <button className="submit-button" type="button" onClick={onStepChange}>Submit</button>
        </div>
      </form>
    </div>

  )
}
export default HungerQuestion