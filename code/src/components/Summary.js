import React from 'react'

export const Summary = ({ sleepHabit, foodHabit, activityTime }) => {
  return (
    <div>
      <h1>Overview of your answers</h1>
      <p>Average sleep per night: {sleepHabit}</p>
      <p>Amount of fruit/veggies every day: {foodHabit}</p>
      <p>Time of physical activity per week: {activityTime}</p>
    </div>
  )
}