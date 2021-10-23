import React from 'react';

const EmailQuestion = ({ emailInput, onEmailInputChange, onStepChange }) => {
  return (
    <form className='short-text-form'>
      <label htmlFor='emailInput'>
        We'll send you a quotation via email. What's your address?
      </label>
      <input
        className='input-box'
        id='emailInput'
        type='email'
        value={emailInput}
        onChange={onEmailInputChange}
      />
      <button onClick={onStepChange}>Submit</button>
    </form>
  );
};

export default EmailQuestion;
