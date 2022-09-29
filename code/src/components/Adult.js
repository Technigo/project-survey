import React from 'react';

// eslint-disable-next-line max-len
export const Adult = ({ meetsCardio, meetsStrength, meetsMovement, setMeetsCardio, setMeetsStrength, setMeetsMovement }) => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <h3>Check all of the habits that apply to you:</h3>
      <label>
          Moderate to high intensity cardio at least 2.5 hours a week?
        <input
          type="checkbox"
          checked={meetsCardio}
          onChange={(event) => setMeetsCardio(event.target.checked)} />
      </label>

      <label>
          Strength train at least 2 days a week?
        <input
          type="checkbox"
          checked={meetsStrength}
          onChange={(event) => setMeetsStrength(event.target.checked)} />
      </label>

      <label>
          Sit on your ass all day?
        <input
          type="checkbox"
          checked={meetsMovement}
          onChange={(event) => setMeetsMovement(event.target.checked)} />
      </label>
    </form>
  )
}