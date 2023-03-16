import React from 'react';

export const LandingPage = ({ handleStepIncrease }) => {
  return (
    <div className="landingPageText" aria-label="welcome text">
      <h1>Company Retreat</h1>
      <h2>To celebrate a great year, help plan our annual retreat!</h2>
      <button type="button" className="buttonStart" onClick={handleStepIncrease}>Start</button>
    </div>
  );
}