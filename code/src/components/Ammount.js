import React from 'react'
import '../index.css';

export const Ammount = ({ ammount, setAmmount }) => {
  const handleAmmount = (event) => {
    setAmmount(event.target.value)
  }
  return (
    <>
      <form className="input-form">
        <label htmlFor="ammount" className="label">How many shrimp would you like?
          <p>Please remember, shrimp are social and need to be at least 10 to feel happy!</p>
          <input
            name="ammount"
            type="range"
            min="0"
            max="20"
            onChange={handleAmmount}
            value={ammount} />
        </label>
      </form>
      <p>You have chosen {ammount}</p>
    </>
  )
}