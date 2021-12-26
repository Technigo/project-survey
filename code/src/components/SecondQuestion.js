import React from "react"

const SecondQuestion = ({
  timeInput,
  onTimeInputChange,
  onPreviousQuestionChange,
  onNextQuestionChange,
}) => {
  const timeGroup = ["3 days ", "7 days ", "2 weeks", "1 month"]

  return (
    <form id="secondQuestion">
      <p className="question">How long would you like to stay there?</p>
      {timeGroup.map((group) => (
        <label className="radio-label" key={group}>
          <input
            className="input"
            type="radio"
            required
            value={group}
            onChange={onTimeInputChange}
            checked={timeInput === group}
          />
          {group}
        </label>
      ))}

      <div className="button-container">
        <button className="glow-on-hover" onClick={onPreviousQuestionChange}>
          PREVIOUS
        </button>
        <button className="glow-on-hover" onClick={onNextQuestionChange}>
          CONTINUE
        </button>
      </div>
    </form>
  )
}

export default SecondQuestion
