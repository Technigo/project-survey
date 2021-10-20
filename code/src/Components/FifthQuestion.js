import React from 'react';

const FifthQuestion = ({ blockers, onBlockersChange, onStepChange }) => {
  const renderButton = () => {
    if (blockers === 'yes') {
      return <button onClick={onStepChange}>Next question</button>;
    } else {
      return <button onClick={onStepChange}>Overview</button>;
    }
  };
  return (
    <form>
      Do you have any blockers?
      <label>
        <input
          type="radio"
          value="yes"
          onChange={() => onBlockersChange('yes')}
          checked={blockers === 'yes'}
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          value="no"
          onChange={() => onBlockersChange('no')}
          checked={blockers === 'no'}
        />
        No
      </label>
      {renderButton()}
    </form>
  );
};

export default FifthQuestion;

{
  /* <span role="img" aria-label="Stop">
        
      </span> */
}
