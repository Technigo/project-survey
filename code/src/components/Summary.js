import React from 'react'
import { WelcomeIcon } from './WelcomeIcon'

export const Summary = ({ sleepHabit, foodHabit, activityTime }) => {
  return (
    <div className="content">
      <WelcomeIcon />
      <h2>Summary</h2>
      <h3>Here are your answers</h3>
      <p>Average sleep per night:</p>
      <span>{sleepHabit}</span>
      <p>Amount of fruit/veggies every day:</p>
      <span>{foodHabit}</span>
      <p>Time of physical activity per week:</p>
      <span>{activityTime}</span>

      <div className="submit-msg">
        <p>Is this correct?</p>
        <p>Please press submit or go back to change your answers</p>
      </div>
    </div>
  )
}