import React from 'react'

export const Menu = ({ step, setStep }) => {
  return (
    <div className="question-container">
      <h1 className="main-heading">Looking for a <span>Web Developer?</span></h1>
      <h2 className="sub-heading">Get in touch with a candidate by taking this.survey!</h2>
      <div className="dot-shape"><h3 className="dot-text"><span className="underline">Only</span> 3 questions!</h3></div>
      <button className="start-btn" type="button" onClick={() => setStep(step + 1)}>Start survey</button>
    </div>
  );
};