import React from 'react';
import { NextButton } from './NextButton';

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
      <NextButton onNext={props.onNext} buttonLabel={props.buttonLabel} />
    </div>
  )
}