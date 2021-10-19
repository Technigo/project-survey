import React from 'react'

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="nameInput">Hey there! Whats your name?</label>
      <input
        id="nameInput"
        type="text"
        placeholder="Type your name here"
        value={nameInput}
        onChange={onNameInputChange}
      />
      <button className="btn6" type="button" onClick={onStepChange}>
        Next question
      </button>
    </form>
  )
}

export default FirstQuestion
