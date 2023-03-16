import React from 'react';
import { NextButton } from './NextButton';
import { PreviousButton } from './PreviousButton';

export const RangeSliderQuestion = (props) => {
  return (
    <div className="rangeQuestion-container">
      <p>{props.questionTitle}</p>
      <div>
        <label htmlFor={props.questionId}>{props.label}</label>
        <input
          type="range"
          id={props.questionId}
          name={props.questionId}
          min="100"
          max="1100"
          onChange={(event) => props.onValueUpdate(event.target.value)} />
      </div>
      <div className="buttons-container">
        <PreviousButton
          onPrevious={props.onPrevious}
          previousButtonLabel={props.previousButtonLabel} />
        <NextButton onNext={props.onNext} buttonLabel={props.buttonLabel} />
      </div>
    </div>
  )
}