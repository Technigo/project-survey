import React from 'react';
import { NextButton } from './NextButton';
import { PreviousButton } from './PreviousButton';

export const TextQuestion = (props) => {
  return (
    <div className="question-container">
      <p>{props.questionTitle}</p>
      <div>
        <div className="label-input-div">
          <label
            aria-label={props.label}
            htmlFor={props.questionId}>{props.label}
          </label>
          <input
            title={props.label}
            type="text"
            id={props.questionId}
            value={props.answers.firstName}
            required
            onChange={(event) => props.onValueUpdate(event.target.value)} />
        </div>
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
