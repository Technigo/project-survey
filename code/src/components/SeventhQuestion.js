import React from 'react';
import ProgressBar from './ProgressBar';

const barData = [
  { bgcolor: '#b62e88', completed: 90 }
];

const SeventhQuestion = ({
  requestInput,
  onRequestInputChange,
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
      <div className="question">
        <p className="question-title">Any special requests?</p>
        <p className="question-specify">* optional, but good for us to know </p>
      </div>
      <textarea
        id="message"
        type="text"
        value={requestInput}
        onChange={onRequestInputChange}
        placeholder="Type your message here..." />

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
export default SeventhQuestion