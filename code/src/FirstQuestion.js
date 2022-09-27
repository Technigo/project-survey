import React from 'react';

const FirstQuestion = ({
  nameInput,
  onNameInputChange,
  onPreviousQuestionChange,
  onNextQuestionChange
}) => {
  return (
    <form className="name">
      <label className="question" htmlFor="nameInput">
        What´s your name?
        <input
          className="name-box"
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