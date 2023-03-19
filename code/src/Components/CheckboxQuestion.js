import React from 'react';
import { NextButton } from './NextButton';
import { PreviousButton } from './PreviousButton';

export const CheckboxQuestion = (props) => {
  return (
    <div className="checkboxQuestion-container">
      <p>{props.questionTitle}</p>
      <div>
        <label
          className="checkbox-label"
          htmlFor={props.questionId}
          aria-label={props.label}>
          {props.label}
        </label>
        <input
          className="checkbox-input"
          type="checkbox"
          id={props.questionId}
          onChange={(event) => props.onValueUpdate(event.target.checked)} />
        <div className="buttons-container">
          <PreviousButton
            onPrevious={props.onPrevious}
            previousButtonLabel={props.previousButtonLabel} />
          <NextButton onNext={props.onNext} buttonLabel={props.buttonLabel} />
        </div>
      </div>
    </div>
  );
}