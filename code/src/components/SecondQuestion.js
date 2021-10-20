import React from "react"

const SecondQuestion = ({
  ageInput,
  onAgeInputChange,
  onPreviousQuestionChange,
  onNextQuestionChange,
}) => {
  const ageGroup = ["3 ", "7", "10", "more than 15"]

  return (
    <form id="secondQuestion">
      <p className="question">How many days would you like to stay?</p>
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
        <button className="glow-on-hover" onClick={onPreviousQuestionChange}>
          PREVIOUS
        </button>
        <button className="glow-on-hover" onClick={onNextQuestionChange}>
          NEXT
        </button>
      </div>
    </form>
  )
}
{
  /* <button onClick={() => window.location.reload(false)} className="btn">Let' start over! <span role="img" aria-label="handpointer">👋🏼</span></button> */
}

export default SecondQuestion
