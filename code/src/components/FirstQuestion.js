import React from 'react'

const FirstQuestion = ({
  nameInput,
  onNameInputChange,
  onStepChange,
  onEnter,
}) => {
  return (
    <form>
      <label htmlFor="nameInput">Hey there! Whats your name?</label>
      <input
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
        className="btn6"
        type="button"
        onClick={onStepChange}
      >
        Next question
      </button>
    </form>
  )
}

export default FirstQuestion
