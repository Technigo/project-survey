import React from 'react';
import { NextButton } from './NextButton';

export const LandingPage = (props) => {
  return (
    <div className="landing-container">
      <img className="home-image" src="./assets/home.jpg" alt="interior of a house" />
      <form className="landing-form">
        <h1>{props.landingTitle}</h1>
        <h2>{props.description}</h2>
        <div>
          <NextButton onNext={props.onNext} buttonLabel={props.buttonLabel} />
        </div>
      </form>
    </div>
  );
};
