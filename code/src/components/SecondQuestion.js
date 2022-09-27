import React from 'react';

const SecondQuestion = ({
  brushInput,
  onBrushInputChange,
  onPreviousQuestionChange,
  onNextQuestionChange
}) => {
  return (
    <form>
      <div className="question">
       What type of tooth brush do you use?
      </div>
      <select
        className="input-box"
        type="text"
        value={brushInput}
        onChange={onBrushInputChange}
        required="required">
        <option value=""> Please select a brush </option>
        <option value="Manual"> Manual tooth brush </option>
        <option value="Electric"> Electric tooth brush </option>
      </select>
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