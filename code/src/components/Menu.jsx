import React from 'react'

export const Menu = ({ step, setStep }) => {
  return (
    <div className="menu-container">
      <h1 className="main-heading">Looking for a Web Developer?</h1>
      <h2 className="sub-heading">This survey can help you find one!</h2>
      <div className="star-shape"><h3 className="star-text">Only 3 questions!</h3></div>
      <button className="start-btn" type="button" onClick={() => setStep(step + 1)}>Start survey</button>
    </div>
  );
};