import React from 'react'

export const Ammount = ({ ammount, setAmmount }) => {
  const handleAmmount = (event) => {
    setAmmount(event.target.value)
  }
  return (
    <form>
      <label htmlFor="ammount">
                Ammount, between 1 and 10:
        <input
          type="range"
          min="0"
          max="10"
          onChange={handleAmmount}
          value={ammount} />
      </label>
    </form>
  )
}