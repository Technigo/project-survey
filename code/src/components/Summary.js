import React from 'react'
import { WelcomeIcon } from './WelcomeIcon'

export const Summary = ({ sleepHabit, foodHabit, activityTime }) => {
  return (
    <div className="content">
      <WelcomeIcon />
      <h2>Summary</h2>
      <h3>Here are your answers</h3>
      <p>Average sleep per night: <span>{sleepHabit}</span></p>
      <p>Amount of fruit/veggies every day: <span>{foodHabit}</span></p>
      <p>Time of physical activity per week: <span>{activityTime}</span></p>

      <div className="submit-msg">
        <p>Is this correct?</p>
        <p>Please press submit or go back to change your answers</p>
      </div>
    </div>
  )
}