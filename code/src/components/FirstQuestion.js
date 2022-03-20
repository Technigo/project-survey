import React from 'react'

const FirstQuestion = ({
  nameInput,
  onNameInputChange,
  onStepChange,
  onEnter,
}) => {
  return (
    <form className="question-container">
      <label className="section-heading" htmlFor="nameInput">
        Heeey there, Whats your name?
      </label>
      <input
        className="input-name"
        name="name"
        id="nameInput"
        type="text"
        placeholder="Type your name here"
        required
        value={nameInput}
        onChange={onNameInputChange}
        onKeyPress={onEnter}
      />
      <button
        disabled={nameInput === ''}
        className="button"
        type="submit"
        onClick={onStepChange}
      >
        Next question
      </button>
    </form>
  )
}

export default FirstQuestion
