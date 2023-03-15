/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

export const Rate = ({ rate, setRate }) => {
  const ratingGroup = ['Poor', 'Improving', 'Good', 'Very good', 'Excellent']
  const handleRateChange = (event) => {
    setRate(event.target.value)
  }
  return (
    <form>
      <p>How would you rate my progress so far?</p>
      {ratingGroup.map((rating) => (
        <label key={rating}>
          <input
            type="radio"
            value={rating}
            onChange={handleRateChange}
            checked={rate === rating} />
          {rating}
        </label>
      ))}
    </form>
  )
}