import React from 'react';
import { NextButton } from './NextButton';

export const LandingPage = (props) => {
  return (
    <div className="landing-container">
      {/* <img className="home-image" src="./assets/red.jpg" alt="interior of a house" /> */}
      <div className="landing-child">
        <h1>{props.landingTitle}</h1>
        <h2>{props.description}</h2>
        <div className="buttons-container start-button">
          <NextButton onNext={props.onNext} buttonLabel={props.buttonLabel} />
        </div>
      </div>
    </div>
  );
};
