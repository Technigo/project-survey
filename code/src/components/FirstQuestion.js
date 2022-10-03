import React from 'react';
import ProgressBar from './ProgressBar';

const barData = [
  { bgcolor: '#b62e88', completed: 14 }
];

const FirstQuestion = ({
  nameInput,
  onNameInputChange,
  onPreviousQuestionChange,
  onNextQuestionChange
}) => {
  return (
    <form className="question-wrap">
      <div className="progressbar">
        {barData.map((item, idx) => (
          <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
        ))}
      </div>
      <p className="question-title">What´s your full name?</p>
      <label className="name-question" htmlFor="nameInput">
        <input
          className="name-input"
          type="text"
          value={nameInput}
          onChange={onNameInputChange}
          required />
      </label>
      <div className="button-container">
        <button type="button" className="back" onClick={onPreviousQuestionChange}>
          BACK
        </button>
        <button type="button" className="forward" onClick={onNextQuestionChange}>
          NEXT
        </button>
      </div>
    </form>
  )
}
export default FirstQuestion