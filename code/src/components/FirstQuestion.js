import React from 'react'

import NextButton from 'components/NextButton'

const amountOfTimes= [
  '1-2 times a week',
  '2-3 times a week',
  '4-5 times a week',
  'everyday'
]

const FirstQuestion = (props) => {

  const onTimeChange = (e) => {
    props.setTime(e.target.value)
  }

  return (
    <div className="question-container" aria-label="How often do you read? 5 options">
      <h1 className="question-header">How often do you read?</h1>
      {amountOfTimes.map(amountOfTime => {
        return (
        <div className="radio-container" key={amountOfTime}>
          <label htmlFor="time">
            <input
              name="time"
              type='radio'
              value={amountOfTime}
              onChange={onTimeChange}
              checked = {props.readingTime === amountOfTime}
              required 
            />
            {amountOfTime}
          </label>
        </div>
      )})} 
      <NextButton />
    </div>
  
  )
}

export default FirstQuestion
