import React from 'react';
import './nameQuestion.css';

const NameQuestion = ({ nameInput, onNameInputChange, onStepChange }) =>
  // or: const { nameInput, onNameInputChange } = props
  {
    return (
      <form className="form">
        <label>
          Type your name:
          <input
            id="nameInput"
            type="text"
            value={nameInput}
            onChange={onNameInputChange}
            placeholder="First and last"
          />
        </label>
        <button
          className="button bouncy"
          disabled={nameInput === ''}
          onClick={onStepChange}
        >
          Next question
        </button>
      </form>
    );
  };

export default NameQuestion;
