import React from 'react'

const EmailQuestion = ({
  emailInput,
  onEmailInputChange,
  onStepChange,
  onEnter,
}) => {
  return (
    <form>
      <label htmlFor="emailInput">Type your Email address</label>
      <input
        id="emailInput"
        type="email"
        placeholder="Email goes here"
        value={emailInput}
        onChange={onEmailInputChange}
        onKeyPress={onEnter}
        required
      />
      <button
        disabled={emailInput === ''}
        className="btn6"
        type="button"
        onClick={onStepChange}
      >
        Complete sign-up
      </button>
    </form>
  )
}

export default EmailQuestion
