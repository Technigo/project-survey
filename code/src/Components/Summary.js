import React from 'react';
import { NextButton } from './NextButton';

export const Summary = (props) => {
  return (
    <div>
      <p>{props.answers.firstName}</p>
      <p>{props.answers.typeOfHome}</p>
      <p>{props.answers.rooms}</p>
      <p>{props.answers.price}</p>
      <div>
        <NextButton onNext={props.onNext} buttonLabel={props.buttonLabel} />
      </div>
    </div>
  );
}