import React from 'react';

const Happiness = ({ happiness, onHappinessChange, onStepChange }) => {
  return (
    <form>
      <label>
        <input
          type="radio"
          value="happy"
          onChange={() => onHappinessChange('happy')}
          checked={happiness === 'happy'}
        />
        <span role="img" aria-label="Happy face">
          😃
        </span>
      </label>

      <label>
        <input
          type="radio"
          value="sad"
          onChange={() => onHappinessChange('sad')}
          checked={happiness === 'sad'}
        />
        <span role="img" aria-label="Sad face">
          🙁
        </span>
      </label>
      <button onClick={onStepChange}>See next Question</button>
    </form>
  );
};

// export default ThirdQuestion;
