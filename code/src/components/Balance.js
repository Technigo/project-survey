/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

// eslint-disable-next-line max-len
// Component presents 1 additional question re balance exercise to the age group 65+
export const Balance = ({ meetsBalance, setMeetsBalance }) => {
  return (
    <form className="balance" onSubmit={(event) => event.preventDefault()}>
      <label className="habitQuestion">
        Train balance on 3 or more days a week (to prevent falls)?
        <input
          type="checkbox"
          checked={meetsBalance}
          onChange={(event) => setMeetsBalance(event.target.checked)} />
      </label>
    </form>
  )
}