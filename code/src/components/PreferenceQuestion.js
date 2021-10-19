import React from 'react'

const PreferenceQuestion = ({
  preferenceInput,
  onPreferenceInputChange,
  onStepChange,
}) => {
  return (
    <form onSubmit={(event) => event.preventDefault}>
      <label htmlFor="preferenceInput">Here are your choices</label>
      <input
        id="preferenceInput"
        type="radio"
        placeholder="choices"
        value={preferenceInput}
        onChange={onPreferenceInputChange}
      />
      <button className="btn6" type="button" onClick={onStepChange}>
        Last question
      </button>
    </form>
  )
}

export default PreferenceQuestion
