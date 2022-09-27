/* eslint-disable indent */
import React from 'react';

const Intro = ({ handleStepIncrease }) => {
  return (
    <div className="intro-container">
      <h1>Welcome to Bla-di-da</h1>
      <form />
      <button className="start-btn" type="button" onClick={handleStepIncrease}>
        Start
      </button>
    </div>
  );
};

export default Intro;
