/* eslint-disable react/no-unescaped-entities */
/* eslint-disable indent */
import React from 'react';

const Intro = ({ handleStepIncrease }) => {
  return (
    <div className="intro-container">
      <h1>Story Time</h1>
      <h2>The Dragon Sneeze</h2>
      <p>
        get carried away by an incredible mad lib story. But first, you need to
        fill out the form.
      </p>
      <form />
      <button className="start-btn" type="button" onClick={handleStepIncrease}>
        Start
      </button>
    </div>
  );
};

export default Intro;
