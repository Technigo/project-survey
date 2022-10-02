import React from 'react'

export const Summary = ({ sleepHabit, foodHabit, activityTime }) => {
  return (
    <div>
      <h3>Here are your answers</h3>
      <p>Average sleep per night: {sleepHabit}</p>
      <p>Amount of fruit/veggies every day: {foodHabit}</p>
      <p>Time of physical activity per week: {activityTime}</p>

      <p className="submit-msg"> Is this correct? Please press submit or go back to change your answers</p>
    </div>
  )
}