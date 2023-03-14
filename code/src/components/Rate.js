import React from 'react'

const ratingRange = ['0', '2', '4', '6', '8', '10']

export const Rate = ({ rate, setRate }) => {
  const handleRateChange = (event) => {
    setRate(event.target.value)
  }
  return (
    <form>
      {ratingRange.map((rating) => (
        <label key={rating}>
          <input
            type="radio"
            value={rating}
            onChange={handleRateChange}
            checked={ratingRange === rating} />
          {rating}
        </label>
      ))}
    </form>
  )
}