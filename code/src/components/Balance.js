import React from 'react';

// eslint-disable-next-line max-len
export const Balance = ({ meetsBalance, setMeetsBalance }) => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label>
         Balance stuff?
        <input
          type="checkbox"
          checked={meetsBalance}
          onChange={(event) => setMeetsBalance(event.target.checked)} />
      </label>
    </form>
  )
}