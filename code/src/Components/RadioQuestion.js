import React from 'react';
import { NextButton } from './NextButton';

export const RadioQuestion = (props) => {
  return (
    <div className="radioQuestion-container">
      <p>{props.questionGreeting}</p>
      <p>{props.questionTitle}</p>
      {props.labels.map((label) => {
        return (
          <div>
            <label htmlFor={props.questionId}>{label}</label>
            <input
              type="radio"
              id={props.questionId}
              name={props.questionId}
              value={label}
              onChange={(event) => props.onValueUpdate(event.target.value)} />
          </div>
        );
      })}
      <NextButton onNext={props.onNext} buttonLabel={props.buttonLabel} />
    </div>
  );
}

