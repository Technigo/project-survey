import React from 'react';

const NameQuestion = ({
  nameInput,
  onNameInputChange,
  onStepChange,
  onEnter
}) => {
  return (
    <div className='form-container'>
      <form>
        <label htmlFor='nameInput'>Type your name:</label>
        <input
          id='nameInput'
          type='text'
          value={nameInput}
          onChange={onNameInputChange}
          onKeyPress={onEnter}
        />
        <button type='button' onClick={onStepChange}>
          Next question
        </button>
      </form>
    </div>
  );
};

export default NameQuestion;
