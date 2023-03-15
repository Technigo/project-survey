import React from 'react';
import { NextButton } from './NextButton';

export const LandingPage = (props) => {
  return (
    <div>
      <h1>{props.landingTitle}</h1>
      <h2>{props.description}</h2>
      <div>
        <NextButton onNext={props.onNext} buttonLabel={props.buttonLabel} />
      </div>
    </div>
  );
};
