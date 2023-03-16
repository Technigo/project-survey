import React from 'react';
import { NextButton } from './NextButton';
import { PreviousButton } from './PreviousButton';

export const RadioQuestion = (props) => {
  return (
    <div className="radioQuestion-container">
      <p>{props.questionGreeting}</p>
      <p>{props.questionTitle}</p>
      {props.labels.map((label) => {
        return (
          <div className="radioQuestion-child">
            <label htmlFor={props.questionId}>{label}
              <img className="radio-icon" src={`../assets/${label}.png`} alt={`${label} type of property`} />
            </label>
            <input
              type="radio"
              id={props.questionId}
              name={props.questionId}
              value={label}
              onChange={(event) => props.onValueUpdate(event.target.value)} />
          </div>
        );
      })}
      <div className="buttons-container">
        <PreviousButton
          onPrevious={props.onPrevious}
          previousButtonLabel={props.previousButtonLabel} />
        <NextButton onNext={props.onNext} buttonLabel={props.buttonLabel} />
      </div>
    </div>
  );
}

