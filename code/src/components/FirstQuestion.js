import React from "react"

const FirstQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
  return (
    <form>
      <label htmlFor="nameInput">Type your name </label>
      <input
        id="nameInput"
        type="text"
        value={nameInput}
        onChange={onNameInputChange}
      />
      <button onClick={onStepChange}> Next Question </button>
    </form>
  )
}

export default FirstQuestion
