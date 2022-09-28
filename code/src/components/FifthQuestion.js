import React from 'react';

const FifthQuestion = ({
  flossInput,
  onFlossInputChange,
  onPreviousQuestionChange,
  onNextQuestionChange
}) => {
  const flossGroup = ['yes', 'no', 'sometimes']

  return (
    <form className="question-wrap">
      <div className="question">
        <p className="question-title">Do you use something in-between your teeth regularly?</p>
        <p className="question-specify">(think floss, interdental brush, waterpick or something similar)</p>
      </div>
      {flossGroup.map((floss) => (
        <div className="responsive-label">
          <label className="radio-label" htmlFor="frequency-id" key={floss}>
            <input
              className="radio-input"
              type="radio"
              value={floss}
              onChange={onFlossInputChange}
              checked={flossInput === floss} />
            {floss}
          </label>
        </div>
      ))}

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
export default FifthQuestion