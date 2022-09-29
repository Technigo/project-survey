import React from 'react';

// eslint-disable-next-line max-len
const HungerQuestion = ({ hungerInput, onHungerInputChange, onStepChange, onPreviousQuestionChange, onEnter }) => {
  return (
    <div className="outer-wrapper">
      <div className="survey-container">
        <form>
          <input
            type="range"
            min="1"
            max="3"
            value={hungerInput}
            onChange={onHungerInputChange}
            onKeyPress={onEnter} />
        </form>
        <div className="range-text">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <div className="button-container">
          <button className="survey-button" type="button" onClick={onPreviousQuestionChange}>Back</button>
          <button className="submit-button" type="submit" onClick={onStepChange}>Submit</button>
        </div>
      </div>
    </div>

  )
}
export default HungerQuestion