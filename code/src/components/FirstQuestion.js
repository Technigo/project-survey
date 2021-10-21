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
        className="input-box"
        type="text"
        required="required"
        value={nameInput}
        onChange={onNameInputChange}
      />
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

export default FirstQuestion
