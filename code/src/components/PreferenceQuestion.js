/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
// import Alert from './Alert';

// eslint-disable-next-line max-len
const PreferenceQuestion = ({ preference, onPreferenceChange, onStepChange, onEnter, onPreviousQuestionChange }) => {
  return (
    <div className="survey-container">
      <form className="form-question">
        <label className="label-text">How is the weather? Are you in the mood for some hot or cold food?</label>
        <div className="preference-container">
          <label className="label-input-preference" htmlFor="preference">
            <input
              id={preference}
              type="radio"
              value="Hot"
              onChange={onPreferenceChange}
              checked={preference === 'Hot'}
              onKeyPress={onEnter} />
            <p>hot food</p>
          </label>
          <label className="label-input-preference" htmlFor="preference">
            <input
              id={preference}
              type="radio"
              value="Cold"
              onChange={onPreferenceChange}
              checked={preference === 'Cold'}
              onKeyPress={onEnter} />
            <p>cold food</p>
          </label>
        </div>
        <div className="button-container">
          <button className="survey-button" type="button" onClick={onPreviousQuestionChange}>Back</button>
          <button className="survey-button" type="button" onClick={onStepChange}>Next</button>
        </div>
      </form>
    </div>
  )
}

export default PreferenceQuestion