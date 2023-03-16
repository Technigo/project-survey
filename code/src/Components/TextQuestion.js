import React from 'react';
import { NextButton } from './NextButton';
import { PreviousButton } from './PreviousButton';

export const TextQuestion = (props) => {
  return (
    <div className="textQuestion-container">
      <p>{props.questionTitle}</p>
      <div>
        <label
          aria-label={props.label}
          htmlFor={props.questionId}>{props.label}
        </label>
        <input
          required
          title={props.label}
          type="text"
          id={props.questionId}
          onChange={(event) => props.onValueUpdate(event.target.value)} />
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
