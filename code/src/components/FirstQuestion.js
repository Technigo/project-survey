import React from 'react'

import NextButton from 'components/NextButton'

const amountOfTime= [
  'not at all',
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
    <div className="question-container" role="radiogroup" aria-label="How often do you read? 5 options">
      <h1 tabIndex='0'>How often do you read?</h1>
      {amountOfTime.map(time => (
        <div className="radio-container" key={time}>
          <label htmlFor="time">
            <input
            name="time"
            type='radio'
            value={time}
            onChange={onTimeChange}
            checked = {props.readingTime ===time}
            required 
            />
            {time}
          </label>
        </div>
      ))} 
      <NextButton />
    </div>
  
  )
}

export default FirstQuestion
