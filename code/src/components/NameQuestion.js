/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
// import Alert from './Alert';

/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
// eslint-disable-next-line max-len
const NameQuestion = ({ nameInput, onNameInputChange, onStepChange, onEnter }) => {
  return (
    <div className="survey-container">
      <form className="form-question">
        <div tabIndex="0" className="label-text">
          What is your name?
        </div>
        <lable tabIndex="0" htmlFor="nameInput">
          <input
            id="nameInput"
            type="text"
            placeholder="Enter name here"
            value={nameInput}
            onChange={onNameInputChange}
            onKeyPress={onEnter}
            autoComplete="off"
            className="name-input" />
        </lable>
        <div className="button-container">
          <button className="survey-button" type="button" onClick={onStepChange}>Next</button>
        </div>
      </form>
    </div>
  )
}

export default NameQuestion