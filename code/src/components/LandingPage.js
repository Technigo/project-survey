import React from 'react';

export const LandingPage = ({ handleStepIncrease }) => {
  return (
    <div className="landingPageText" aria-label="welcome text">
      <h1>Company Retreat Survey</h1>
      <h2>Help plan our next trip!</h2>
      <div className="startButtonContainer">
        <button type="button" className="buttonStart" onClick={handleStepIncrease}>Start</button>
      </div>
    </div>
  );
}