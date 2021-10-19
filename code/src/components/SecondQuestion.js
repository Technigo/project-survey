import React from "react"

const SecondQuestion = ({
  ageInput,
  onAgeInputChange,
  onPreviousQuestionChange,
  onNextQuestionChange,
}) => {
  const ageGroup = ["younger than 18", "18-30", "30-50", "older than 50"]

  return (
    <form id="secondQuestion">
      <p className="question"> How old are you? </p>
      {ageGroup.map((group) => (
        <label className="label" key={group}>
          <input
            className="input"
            type="radio"
            required
            value={group}
            onChange={onAgeInputChange}
            checked={ageInput === group}
          />
          {group}
        </label>
      ))}

      <div className="button-container">
        <button onClick={onPreviousQuestionChange}>Go Back</button>
        <button onClick={onNextQuestionChange}>Continue</button>
      </div>
    </form>
  )
}

export default SecondQuestion
