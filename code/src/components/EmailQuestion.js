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
        placeholder="type your Email address here"
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
        See your entered information
      </button>
    </form>
  )
}

export default EmailQuestion
