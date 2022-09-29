/* eslint-disable max-len */
import React from 'react';

// eslint-disable-next-line max-len
export const Child = ({ meetsCardio, meetsStrength, meetsMovement, setMeetsCardio, setMeetsStrength, setMeetsMovement }) => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <h3>Check all of the habits that apply to you:</h3>
      <label>
          Do at least an average of 60min per day of moderate to high intensity activity across the week?
        <input
          type="checkbox"
          checked={meetsCardio}
          onChange={(event) => setMeetsCardio(event.target.checked)} />
      </label>
      <label>
          Strength train at least 3 days a week?
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