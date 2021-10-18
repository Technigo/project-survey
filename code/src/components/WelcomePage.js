import React from 'react';

const WelcomePage = ({ onStepChange }) => {
  return (
    <div>
      <h1>Welcome to my survey! </h1>
      <button onClick={onStepChange}>Start survey!</button>
    </div>
  );
};

export default WelcomePage;
