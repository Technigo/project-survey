import React from 'react';
import { NextButton } from './NextButton';

export const SelectQuestion = (props) => {
  return (
    <>
      <form className="select-form">
        <p>{props.questionTitle}</p>
        <select
          type="radio"
          id={props.questionId}
          name={props.questionId}
          onChange={(event) => props.onValueUpdate(event.target.value)}>
          <option value="">--Select--</option>
          {props.option.map((option) => {
            return (
              <option value={option}>{option}</option>
            )
          })}
        </select>
      </form>
      <NextButton onNext={props.onNext} buttonLabel={props.buttonLabel} />
    </>
  )
}
