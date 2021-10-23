import React from 'react';

const NameQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
  return (
    <form className='short-text-form'>
      <label htmlFor='nameInput'>What's your name?</label>
      <input
        id='nameInput'
        type='text'
        value={nameInput}
        onChange={onNameInputChange}
      />
      <button onClick={onStepChange}>Next</button>
    </form>
  );
};

export default NameQuestion;
