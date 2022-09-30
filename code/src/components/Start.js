import React from 'react';

const Start = ({ handleStepIncrese }) => {
  return (
    <div>
      <h1>Survey</h1>
      <h2>Please take a minute to answer some questions about your day</h2>
      <button type="button" id="nextBtn" onClick={(e) => handleStepIncrese(e, true)}>Start</button>
    </div>

  );
}

export default Start;