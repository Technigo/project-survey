import React from 'react'
import { SleepIcon } from './SleepIcon'

export const Sleep = ({ sleepHabit, setSleepHabit }) => {
  const handleUserHabitChange = (event) => {
    setSleepHabit(event.target.value)
    console.log(setSleepHabit)
  }
  return (
    <div className="content">
      <SleepIcon />
      <h2>Sleep habits</h2>

      <h3>How many hours do you sleep per night?</h3>
      <div className="radio-buttons">
        <label htmlFor="<4h">
          <input
            id="<4h"
            type="radio"
            name="hours"
            value="less than 4 hours"
            onChange={handleUserHabitChange} />
          Less than 4 hours
        </label>
        <label htmlFor="4-6h">
          <input
            id="4-6h"
            type="radio"
            name="hours"
            value="4-6 hours"
            onChange={handleUserHabitChange} />
          4-6 hours
        </label>
        <label htmlFor="6-8">
          <input
            id="6-8"
            type="radio"
            name="hours"
            value="6-8 hours"
            onChange={handleUserHabitChange} />
          6-8 hours
        </label>
        <label htmlFor="8-10">
          <input
            type="radio"
            id="8-10"
            name="hours"
            value="8-10 hours or more"
            onChange={handleUserHabitChange} />
            8-10 hours or more
        </label>
      </div>
      <p>Your answer: {sleepHabit}</p>
    </div>
  )
}