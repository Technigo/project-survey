import React from 'react';
import { NextButton } from './NextButton';

export const TextQuestion = (props) => {
  return (
    <div>
      <label htmlFor={props.questionId}>{props.label}</label>
      <input
        type="text"
        id={props.questionId}
        name={props.questionId}
        onChange={(event) => props.onValueUpdate(event.target.value)} />
      <NextButton onNext={props.onNext} />

    </div>
  );
}
