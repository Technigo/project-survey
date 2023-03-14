import React from 'react';
import { NextButton } from './NextButton';

export const SelectQuestion = (props) => {
  return (
    <div>
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
    </div>
  );
}
