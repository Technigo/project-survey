/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
// import Alert from './Alert';

/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
// eslint-disable-next-line max-len
const NameQuestion = ({ nameInput, onNameInputChange, onStepChange, onEnter }) => {
  return (
    <div className="survey-container">
      <form className="form-question">
        <label tabIndex="0" className="label-text" htmlFor="nameInput">
          What is your name?
        </label>
        <input
          id="nameInput"
          type="text"
          placeholder="Enter name here"
          value={nameInput}
          onChange={onNameInputChange}
          onKeyPress={onEnter}
          autoComplete="off"
          required
          className="name-input" />
        <div className="button-container">
          <button className="survey-button" type="button" onClick={onStepChange}>Next</button>
        </div>
      </form>
    </div>
  )
}

export default NameQuestion