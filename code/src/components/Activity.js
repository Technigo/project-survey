/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

export const Activity = ({ activityTime, setActivityTime }) => {
  const handleUserActivityChange = (event) => {
    setActivityTime(event.target.value)
  }
  return (
    <div>
      <h3>How physical active are you in average during a week?</h3>
      <label>
        <select onChange={handleUserActivityChange}>
          <option selected="true" disabled value="">Select an option:</option>
          <option value="0 min/week">0 min/week</option>
          <option value="<30 min/week">Less than 30 min/week</option>
          <option value="30-60 min/week">30-60 min/week</option>
          <option value="60-90 min/week">60-90 min/week</option>
          <option value="90-150 min/week">90-150 min/week</option>
          <option value="150-300 min/week">150-300 min/week</option>
          <option value=">300 min/week">More than 300 min/week</option>
        </select>
      </label>
      <p>Your answer: {activityTime}</p>

    </div>
  )
}