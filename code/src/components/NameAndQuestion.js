import React from 'react'
// import Alert from './Alert';

// eslint-disable-next-line max-len
const NameAndQuestion = ({ nameInput, onNameInputChange, preference, onPreferenceChange, onStepChange, onEnter }) => {
  return (
    <div className="outer-wrapper">
      <div className="survey-container">
        <h3>Name</h3>
        <p>What is you name?</p>
        <form>
          <input
            id="nameInput"
            type="name"
            placeholder="Enter name"
            value={nameInput}
            onChange={onNameInputChange}
            onKeyPress={onEnter}
            autoComplete="off" />
        </form>

        <form>
          <p>Are you in the mood for hot or cold food?</p>
          <input
            type="radio"
            value="Hot"
            onChange={onPreferenceChange}
            checked={preference === 'Hot'}
            onKeyPress={onEnter} />
          <p>Hot</p>

          <input
            type="radio"
            value="Cold"
            onChange={onPreferenceChange}
            checked={preference === 'Cold'}
            onKeyPress={onEnter} />
          <p>Cold</p>
        </form>
        <button className="survey-button" type="button" onClick={onStepChange}>Next</button>
      </div>
    </div>
  )
}

export default NameAndQuestion