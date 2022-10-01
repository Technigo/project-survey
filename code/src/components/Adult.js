/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

// eslint-disable-next-line max-len
// Component presents 3 questions to the age group 18 - 64 years
export const Adult = ({
  meetsCardio, meetsStrength, meetsMovement,
  setMeetsCardio, setMeetsStrength, setMeetsMovement
}) => {
  return (
    <form className="form" onSubmit={(event) => event.preventDefault()}>
      <h3 className="mainQuestion">Check all of the habits that apply to you:</h3>
      <label className="habitQuestion">
        Do moderate to high intensity cardio at least 2.5 hours a week?
        <input
          type="checkbox"
          checked={meetsCardio}
          onChange={(event) => setMeetsCardio(event.target.checked)} />
      </label>
      <label className="habitQuestion">
        Strength train at least 2 days a week?
        <input
          type="checkbox"
          checked={meetsStrength}
          onChange={(event) => setMeetsStrength(event.target.checked)} />
      </label>
      <label className="habitQuestion">
        Avoid sitting/being inactive for a larger part of the day?
        <input
          type="checkbox"
          checked={meetsMovement}
          onChange={(event) => setMeetsMovement(event.target.checked)} />
      </label>
    </form>
  )
}