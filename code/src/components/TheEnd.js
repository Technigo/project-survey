import React from 'react';
import ProgressBar from './ProgressBar';

const barData = [
  { bgcolor: '#b62e88', completed: 100 }
];

const TheEnd = ({
  nameInput,
  brushInput,
  frequencyInput,
  checkboxGroup,
  flossInput,
  goalInput,
  requestInput,
  onPreviousQuestionChange,
  onNextQuestionChange
}) => {
  return (
    <section className="summary">
      <div className="progressbar">
        {barData.map((item, idx) => (
          <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
        ))}
      </div>
      <h3>Thank you {nameInput} for your participation</h3>
      <p>Here´s a summary of your answers, please check them</p>
      <span className="summary-text">
       ⭐️ You use a {brushInput} toothbrush {frequencyInput}
      </span>
      <span className="summary-text">
       🫧 If you floss?: {flossInput}
      </span>
      <span className="summary-text">
       🩸 Currently you experience: {checkboxGroup}
      </span>
      <span className="summary-text">
       🐣 Your goal is: {goalInput}
      </span>
      <span className="summary-text">
       👑 Special requests, if any: {requestInput}
      </span>

      <div className="button-container">
        <button type="button" className="back" onClick={onPreviousQuestionChange}>
          BACK
        </button>
        <button type="submit" className="submit-btn" onClick={onNextQuestionChange}>
          SUBMIT
        </button>
      </div>
    </section>
  )
}
export default TheEnd