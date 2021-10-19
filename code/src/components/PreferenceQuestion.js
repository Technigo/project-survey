import React from 'react'

const PreferenceQuestion = ({
  preferenceInput,
  onPreferenceInputChange,
  onStepChange,
  onEnter,
}) => {
  return (
    <>
      <h2> Click on which type of content you'd like to see more of</h2>
      <form className="checkbox-container">
        <div className="input-child">
          <label className="label-checkbox" htmlFor="preferenceInput">
            Surf
          </label>
          <input
            type="checkbox"
            checked={preferenceInput}
            value={preferenceInput}
            onChange={onPreferenceInputChange}
            onKeyPress={onEnter}
          />
        </div>
        <div className="input-child">
          <label className="label-checkbox" htmlFor="preferenceInput">
            {' '}
            Clothing{' '}
          </label>
          <input
            id="preferenceInput"
            type="checkbox"
            checked={preferenceInput}
            value={preferenceInput}
            onChange={onPreferenceInputChange}
            onKeyPress={onEnter}
          />
        </div>
        <div className="input-child">
          <label className="label-checkbox" htmlFor="preferenceInput">
            {' '}
            Events{' '}
          </label>
          <input
            id="preferenceInput"
            type="checkbox"
            checked={preferenceInput}
            value={preferenceInput}
            onChange={onPreferenceInputChange}
            onKeyPress={onEnter}
          />
        </div>
        <div className="input-child">
          <label className="label-checkbox" htmlFor="preferenceInput">
            {' '}
            Travel{' '}
          </label>
          <input
            id="preferenceInput"
            type="checkbox"
            checked={preferenceInput}
            value={preferenceInput}
            onChange={onPreferenceInputChange}
            onKeyPress={onEnter}
          />
        </div>
      </form>
      <button className="btn6" type="button" onClick={onStepChange}>
        Last question
      </button>
    </>
  )
}

export default PreferenceQuestion
