import React from 'react';
import { NextButton } from './NextButton';

export const Summary = (props) => {
  const printParking = () => {
    if (props.answers.typeOfHome === 'Apartment') {
      return <p>{props.answers.parking === true ? 'Parking required' : 'Parking not required'}</p>
    }
  }
  return (
    <div className="summary-container">
      <p>Awesome, {props.answers.firstName}!</p>
      <p>{props.summaryTitle}</p>
      <p>{props.answers.typeOfHome}</p>
      <p>{printParking()}</p>
      <p>{props.answers.rooms}</p>
      <p>{props.answers.price}</p>
      <div>
        <NextButton onNext={props.onNext} buttonLabel={props.buttonLabel} />
        <NextButton onNext={props.onNext} buttonLabel={props.restartButtonLabel} />
      </div>
    </div>
  );
}