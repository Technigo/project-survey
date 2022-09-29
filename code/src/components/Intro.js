/* eslint-disable react/no-unescaped-entities */
/* eslint-disable indent */
import React from 'react';

const Intro = ({ handleSubmit }) => {
  return (
    <div className="intro-container">
      <h1>Story Time</h1>
      <h2>The Dragon Sneeze</h2>
      <p>get carried away by an incredible mad lib story. </p>
      <p>But first, you need to fill out the form.</p>
      <form onSubmit={handleSubmit}>
        <input type="submit" className="continue-btn" value="Start" />
      </form>
    </div>
  );
};

export default Intro;
