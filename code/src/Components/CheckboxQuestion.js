import React from 'react';
import { NextButton } from './NextButton';

export const CheckboxQuestion = (props) => {
  return (
    <div className="checkboxQuestion-container">
      <p>{props.questionTitle}</p>
      <div>
        <input
          type="checkbox"
          id={props.questionId}
          onChange={(event) => props.onValueUpdate(event.target.checked)} />
        <NextButton onNext={props.onNext} buttonLabel={props.buttonLabel} />
      </div>
    </div>
  );
}