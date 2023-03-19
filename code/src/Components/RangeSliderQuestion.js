import React from 'react';
import { NextButton } from './NextButton';
import { PreviousButton } from './PreviousButton';

export const RangeSliderQuestion = (props) => {
  return (
    <div className="rangeQuestion-container">
      <p>{props.questionTitle}</p>
      <div className="label-input-div">
        {/* <label htmlFor={props.questionId}></label> */}
        <input
          type="range"
          id={props.questionId}
          name={props.questionId}
          min="3500000"
          max="7500000"
          step="100000"
          onChange={(event) => props.onValueUpdate(event.target.value)} />
        <label
          className="range-slider-label"
          htmlFor={props.questionId}
          aria-label={props.label}>
          {props.answers.price} {props.label}
        </label>
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