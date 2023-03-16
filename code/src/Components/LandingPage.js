import React from 'react';
import { NextButton } from './NextButton';

export const LandingPage = (props) => {
  return (
    <div className="landing-container">
      {/* <img className="home-image" src="https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="interior of a house" /> */}
      <div className="landing-child">
        <h1>{props.landingTitle}</h1>
        <h2>{props.description}</h2>
        <div className="buttons-container">
          <NextButton onNext={props.onNext} buttonLabel={props.buttonLabel} />
        </div>
      </div>
    </div>
  );
};
