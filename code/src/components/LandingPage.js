import React from 'react';

export const LandingPage = ({ handleQuestionIncrease }) => {
  return (
    <div className="landingPageText" aria-label="welcome text">
      <h1>Company Retreat</h1>
      <h2>To celebrate a great year, help plan our annual retreat!</h2>
      <button type="button" className="buttonStart" onClick={handleQuestionIncrease}>Start</button>
    </div>
  );
}