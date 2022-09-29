import React from 'react';

const SeventhQuestion = ({
  requestInput,
  onRequestInputChange,
  onPreviousQuestionChange,
  onNextQuestionChange
}) => {
  return (
    <form className="question-wrap">
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