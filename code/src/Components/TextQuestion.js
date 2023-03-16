import React from 'react';
import { NextButton } from './NextButton';

export const TextQuestion = (props) => {
  return (
    <div className="textQuestion-container">
      <p>{props.questionTitle}</p>
      <div>
        <label
          ariaLabel={props.label}
          htmlFor={props.questionId}>{props.label}
        </label>
        <input
          required
          title={props.label}
          type="text"
          id={props.questionId}
          onChange={(event) => props.onValueUpdate(event.target.value)} />
        <NextButton onNext={props.onNext} buttonLabel={props.buttonLabel} />
      </div>
    </div>
  );
}
