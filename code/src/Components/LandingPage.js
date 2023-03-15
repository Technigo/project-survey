import React from 'react';
import { NextButton } from './NextButton';

export const LandingPage = (props) => {
  return (
    <div>
      <h1>{props.landingTitle}</h1>
      <p>{props.description}</p>
      <div>
        <NextButton onNext={props.onNext} buttonLabel={props.buttonLabel} />
      </div>
    </div>
  );
};
