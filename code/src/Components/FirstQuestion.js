import React from 'react';

const FirstQuestion = ({ onStepChange, nameInput, onNameInputChange }) => {
  return (
    <section className='questionWrapper'>
      <div className='question'>
        <h2 tabindex='0'>So, you want to tell me who your inner wizard is?</h2>
        <p tabindex='0'>But first, enter your name here.</p>
        <form>
          <input
            type='text'
            placeholder='Your name here'
            aria-label='Write your name'
            className='input'
            value={nameInput}
            onChange={onNameInputChange}
          ></input>
          <button
            className='btn'
            disabled={nameInput === ''}
            onClick={onStepChange}
          >
            Next Question
          </button>
        </form>
      </div>
    </section>
  );
};

export default FirstQuestion;
