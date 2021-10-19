import React from "react"

const FirstQuestion = ({
  nameInput,
  onNameInputChange,
  onPreviousQuestionChange,
  onNextQuestionChange,
}) => {
  return (
    <form className="namebox">
      <label className="question" htmlFor="nameInput">
        Please tell your name
      </label>
      <input
        id="nameInput"
        type="text"
        value={nameInput}
        onChange={onNameInputChange}
      />
      <div className="button-container">
        <button className="glow-on-hover" onClick={onPreviousQuestionChange}>
          Go Back
        </button>
        <button className="glow-on-hover" onClick={onNextQuestionChange}>
          Continue
        </button>
      </div>
    </form>
  )
}

export default FirstQuestion
