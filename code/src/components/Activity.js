import React from 'react'

export const Activity = ({ activityTime, setActivityTime }) => {
  const handleUserActivityChange = (event) => {
    setActivityTime(event.target.value)
  }
  return (
    <div>
      <h3>How physical active are you in average during a week?</h3>
      <div>
        <select onChange={handleUserActivityChange}>
          <option label="" selected="true" disabled value="">Select an option:</option>
          <option label="0 min/week" value="0 min/week">0 min/week</option>
          <option label="<30 min/week" value="<30 min/week">Less than 30 min/week</option>
          <option label="30-60 min/week" value="30-60 min/week">30-60 min/week</option>
          <option label="60-90 min/week" value="60-90 min/week">60-90 min/week</option>
          <option label="90-150 min/week" value="90-150 min/week">90-150 min/week</option>
          <option label="150-300 min/wee" value="150-300 min/week">150-300 min/week</option>
          <option label=">300 min/week" value=">300 min/week">More than 300 min/week</option>
        </select>
      </div>
      <p>Your answer: {activityTime}</p>

    </div>
  )
}