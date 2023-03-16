import React from 'react';
import { NextButton } from './NextButton';

export const CheckboxQuestion = (props) => {
  return (
    <form className="checkbox-form">
      <p>{props.questionTitle}</p>
      <div>
        <input
          type="checkbox"
          id={props.questionId}
          checked={props.answers.park}
          onChange={(event) => props.onValueUpdate(event.target.checked)} />
        <NextButton onNext={props.onNext} buttonLabel={props.buttonLabel} />
      </div>
    </form>
  );
}