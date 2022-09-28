import React from 'react';

const FirstQuestion = ({
  nameInput,
  onNameInputChange,
  onPreviousQuestionChange,
  onNextQuestionChange
}) => {
  return (
    <form className="question-wrap">
      <p className="question-title">What´s your full name?</p>
      <label className="name-question" htmlFor="nameInput">
        <input
          className="name-input"
          type="text"
          value={nameInput}
          onChange={onNameInputChange}
          required="required" />
      </label>
      <div className="button-container">
        <button type="button" className="back" onClick={onPreviousQuestionChange}>
          BACK
        </button>
        <button type="button" className="forward" onClick={onNextQuestionChange}>
          FORWARD
        </button>
      </div>
    </form>
  )
}
export default FirstQuestion