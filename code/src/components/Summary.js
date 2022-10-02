import React from 'react'
import { WelcomeIcon } from './WelcomeIcon'

export const Summary = ({ sleepHabit, foodHabit, activityTime }) => {
  return (
    <div className="content">
      <WelcomeIcon />
      <h3>Here are your answers</h3>
      <p>Average sleep per night: {sleepHabit}</p>
      <p>Amount of fruit/veggies every day: {foodHabit}</p>
      <p>Time of physical activity per week: {activityTime}</p>

      <div className="submit-msg">
        <p>Is this correct?</p>
        <p>Please press submit or go back to change your answers</p>
      </div>
    </div>
  )
}