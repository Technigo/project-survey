import React from 'react';

const WelcomePage = ({ onStepChange }) => {
  return (
    <div className='welcome-page'>
      <h1>Welcome to my survey</h1>
      <button className='form-button' onClick={onStepChange}>
        Start
      </button>
    </div>
  );
};

export default WelcomePage;
