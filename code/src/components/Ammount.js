import React from 'react'
import '../index.css';

export const Ammount = ({ ammount, setAmmount }) => {
  const handleAmmount = (event) => {
    setAmmount(event.target.value)
  }
  return (
    <div className="ammount-container">
      <p>How many shrimp would you like?</p>
      <p>Please remember, shrimp are social and need to be at least 10 to feel happy!</p>
      <form>
        <label htmlFor="ammount">
          <input
            type="range"
            min="0"
            max="10"
            onChange={handleAmmount}
            value={ammount} />
        </label>
      </form>
      <p>You have chosen {ammount}</p>
    </div>
  )
}