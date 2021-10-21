import React from 'react';

const EmailQuestion = ({ emailInput, onEmailInputChange, onStepChange }) => {
  return (
    <form>
      <label htmlFor='emailInput'>
        We'll send you a quotation via email. What's your address?
      </label>
      <input
        id='emailInput'
        type='email'
        value={emailInput}
        onChange={onEmailInputChange}
      />
      <button onClick={onStepChange}>Next</button>
    </form>
  );
};

export default EmailQuestion;
