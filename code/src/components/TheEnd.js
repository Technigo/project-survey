import React from 'react';

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
      <h3>Thank you {nameInput} for your participation</h3>
      <p>Here´s a summary of your answers, please check them</p>
      <span className="summary-text">
        You use a {brushInput} toothbrush {frequencyInput}
      </span>
      <span className="summary-text">
        If you floss?: {flossInput}
      </span>
      <span className="summary-text">
        Currently you experience: {checkboxGroup}
      </span>
      <span className="summary-text">
        Your goal is: {goalInput}
      </span>
      <span className="summary-text">
        Special requests, if any: {requestInput}
      </span>

      <div className="button-container">
        <button type="button" className="back" onClick={onPreviousQuestionChange}>
          BACK
        </button>
        <button type="button" className="forward" onClick={onNextQuestionChange}>
          FORWARD
        </button>
      </div>
    </section>
  )
}
export default TheEnd