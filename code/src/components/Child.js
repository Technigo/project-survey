/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React from 'react';

// eslint-disable-next-line max-len
// Component presents 3 questions to the age group 5 - 17 years
export const Child = ({ meetsCardio, meetsStrength, meetsMovement, setMeetsCardio, setMeetsStrength, setMeetsMovement }) => {
  return (
    <form className="form" onSubmit={(event) => event.preventDefault()}>
      <h3 className="mainQuestion">Check all of the habits that apply to you:</h3>
      <label className="habitQuestion">
        Do at least an average of 60min per day of moderate to high intensity activity across the week?
        <input
          type="checkbox"
          checked={meetsCardio}
          onChange={(event) => setMeetsCardio(event.target.checked)} />
      </label>
      <label className="habitQuestion">
        Strength train at least 3 days a week?
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