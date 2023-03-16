import React from 'react';
import { NextButton } from './NextButton';

export const RadioQuestion = (props) => {
  return (
    <form className="radio-form">
      <p>{props.questionGreeting}</p>
      <p>{props.questionTitle}</p>
      {props.label.map((label) => {
        return (
          <div>
            <label htmlFor={props.questionId}>{label}</label>
            <input
              type="radio"
              id={props.questionId}
              name={props.questionId}
              onChange={(event) => props.onValueUpdate(event.target.value)} />
          </div>
        );
      })}
      <NextButton onNext={props.onNext} buttonLabel={props.buttonLabel} />
    </form>
  );
}

