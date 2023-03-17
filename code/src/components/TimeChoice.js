import React from 'react'
import './components.css'

const timePeriods = ['past', 'present', 'future']

export const TimeChoice = ({ yourTimeChoice, setYourTimeChoice }) => {
  const handleTimeChoice = (event) => {
    setYourTimeChoice(event.target.value);
  }
  return (
    <form>
      <p className="question">In your non-fiction dreams, which time in your life do you prefer to dream about?</p>
      {timePeriods.map((timePeriod) => (
        <label className="time-options" htmlFor="time" key={timePeriod}>
          <input
            className="radio-buttons"
            type="radio"
            id=""
            onChange={handleTimeChoice}
            value={timePeriod}
            checked={yourTimeChoice === timePeriod} />
          {timePeriod}
        </label>
      ))}
    </form>
  )
}