import React from 'react';

const LandingPage = ({ onStepChange }) => {
  return (
    <div className='landing-container'>
      <img
        src='/images/landingpage.png'
        alt='painting'
        className='landing-image'
      />
      <div className='landing-content'>
        <h1>Welcome to Health and Wellness Assessment Page</h1>
        <button type='button' onClick={onStepChange}>
          Start Answering Questions
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
