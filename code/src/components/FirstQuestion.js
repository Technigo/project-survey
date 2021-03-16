import React from 'react'


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
    console.log(e.target.value)
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div role="radiogroup" aria-label="How often do you read? 5 options">
        <h1>How often do you read?</h1>
        {amountOfTime.map(time => (
          <div className="radio-container" key={time}>
            <input
            type='radio'
            value={time}
            onChange={onTimeChange}
            checked={props.readingTime === time}
            required 
            />
            {time}
          </div>
        ))}
      </div>
    </form>
  )
}

export default FirstQuestion
