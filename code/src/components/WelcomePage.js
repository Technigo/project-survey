import React from 'react';

const WelcomePage = ({ onStepChange }) => {
  return (
    <div>
      <button className='start-button' onClick={onStepChange}>
        Start
      </button>
    </div>
  );
};

export default WelcomePage;
