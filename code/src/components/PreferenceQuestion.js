/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
// import Alert from './Alert';

// eslint-disable-next-line max-len
const PreferenceQuestion = ({ preference, onPreferenceChange, onStepChange, onEnter, onPreviousQuestionChange }) => {
  return (
    <div className="survey-container">
      <form className="form-question">
        <label tabIndex="0" className="label-text">How is the weather? Are you in the mood for some hot or cold food?</label>
        <div className="preference-container">
          <label className="label-input-preference" htmlFor="preference">
            <input
              id={preference}
              type="radio"
              value="hot"
              onChange={onPreferenceChange}
              checked={preference === 'hot'}
              onKeyPress={onEnter}
              alt="hot" />
            <p>Hot food</p>
          </label>
          <label tabIndex="0" className="label-input-preference" htmlFor="preference">
            <input
              id={preference}
              type="radio"
              value="cold"
              onChange={onPreferenceChange}
              checked={preference === 'cold'}
              onKeyPress={onEnter}
              tabIndex="0"
              alt="cold" />
            <p>Cold food</p>
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