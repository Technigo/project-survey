import React from "react"

const SecondQuestion = ({
  ageInput,
  onAgeInputChange,
  onPreviousQuestionChange,
  onNextQuestionChange,
}) => {
  const ageGroup = ["3 days ", "7 days ", "2 weeks", "1 month"]

  return (
    <form id="secondQuestion">
      <p className="question">How long would you like to stay there?</p>
      {/* <div> */}
      {ageGroup.map((group) => (
        <label className="radio-label" key={group}>
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
      {/* </div> */}

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

/* <button onClick={() => window.location.reload(false)} className="btn">Let' start over! <span role="img" aria-label="handpointer">👋🏼</span></button> */

export default SecondQuestion
