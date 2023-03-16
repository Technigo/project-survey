import React from 'react';
import { NextButton } from './NextButton';

export const Summary = (props) => {
  return (
    <form className="summary-form">
      <p>Awesome, {props.answers.firstName}!</p>
      <p>{props.summaryTitle}</p>
      <p>{props.answers.typeOfHome}</p>
      <p>{props.answers.rooms}</p>
      <p>{props.answers.price}</p>
      <div>
        <NextButton onNext={props.onNext} buttonLabel={props.buttonLabel} />
        <NextButton onNext={props.onNext} buttonLabel={props.restartButtonLabel} />
      </div>
    </form>
  );
}