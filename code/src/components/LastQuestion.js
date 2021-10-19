import React from 'react'

const LastQuestion = ({ emailInput, onEmailInputChange, onStepChange }) => {
  return (
    <form>
      <label htmlFor="emailInput">Type your Email address</label>
      <input
        id="surnameInput"
        type="text"
        value={emailInput}
        onChange={onEmailInputChange}
      />
      <button type="button" onClick={onStepChange}>
        See your entered details
      </button>
    </form>
  )
}

export default LastQuestion
