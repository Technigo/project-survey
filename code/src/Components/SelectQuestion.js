import React from 'react';
import { NextButton } from './NextButton';
import { PreviousButton } from './PreviousButton';

export const SelectQuestion = (props) => {
  return (
    <>
      <div className="selectQuestion-container">
        <p>{props.questionTitle}</p>
        <div className="select-dropdown">
          <select
            id={props.questionId}
            name={props.questionId}
            aria-label={props.questionId}
            onChange={(event) => props.onValueUpdate(event.target.value)}>
            <option disabled value="">Select {props.questionId} </option>
            {props.option.map((option) => {
              return (
                <option className="select-option" value={option}>{option}</option>
              )
            })}
          </select>
        </div>

      </div>
      <div className="buttons-container">
        <PreviousButton
          onPrevious={props.onPrevious}
          previousButtonLabel={props.previousButtonLabel} />
        <NextButton onNext={props.onNext} buttonLabel={props.buttonLabel} />
      </div>
    </>
  )
}
