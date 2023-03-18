import React from 'react';
import { NextButton } from './NextButton';
import { PreviousButton } from './PreviousButton';

export const Summary = (props) => {
  const printParking = () => {
    if (props.answers.typeOfHome === 'Apartment') {
      return <p>{props.answers.parking === true ? 'Parking required' : 'Parking not required'}</p>
    }
  }
  return (
    <div className="summary-container">
      <p>Awesome {props.answers.firstName}!</p>
      <p>{props.summaryTitle}</p>
      <p>{props.answers.typeOfHome}</p>
      <p>{printParking()}</p>
      <p>{props.answers.rooms} rooms</p>
      <p>Maximum budget: {props.answers.price} kr</p>
      <div className="buttons-container">
        <PreviousButton
          onPrevious={props.onPrevious}
          previousButtonLabel={props.previousButtonLabel} />
        <NextButton onNext={props.onNext} buttonLabel={props.buttonLabel} />
      </div>
    </div>
  );
}