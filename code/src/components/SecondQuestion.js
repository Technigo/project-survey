import React from 'react';

const SecondQuestion = ({
  brushInput,
  onBrushInputChange,
  onPreviousQuestionChange,
  onNextQuestionChange
}) => {
  return (
    <form className="question-wrap">
      <div className="question">
        <p className="question-title">What type of tooth brush do you use?</p>
      </div>
      <div className="custom-select">
        <select
          className="select-input"
          type="text"
          value={brushInput}
          onChange={onBrushInputChange}
          required="required">
          <option value=""> Please select a brush </option>
          <option value="Manual"> Manual tooth brush </option>
          <option value="Electric"> Electric tooth brush </option>
        </select>
      </div>
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
export default SecondQuestion