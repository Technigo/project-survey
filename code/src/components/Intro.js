/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable indent */
import React from 'react';

const Intro = ({ handleSubmit }) => {
  return (
    <div className="intro-container">
      <div className="header-container">
        <h1>Story Time</h1>
        <h2>The Dragon Sneeze</h2>
      </div>
      <img
        width="250px"
        src="./images/dragon.png"
        alt="Fire Breathing Dragons Wallpaper 1423660,fire Breathing - Beautiful Dragon@clipartmax.com"></img>
      <p>get carried away by an incredible mad lib story. </p>
      <p>But first, you need to fill out the form.</p>
      <form onSubmit={handleSubmit}>
        <input type="submit" className="continue-btn" value="Start" />
      </form>
    </div>
  );
};

export default Intro;
