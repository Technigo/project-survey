import React from 'react'

const ThirdQuestion = ({ onSetTravel, onStepChange }) => {
  const timeArray = ['1 week', '2 weeks', '1 month', '3 month', '6 month']
  return (
    <>
      <section className="time-container">
        <h2 className="section-heading">
          How long time do u wanna be on holiday for?
        </h2>
        {timeArray.map((timeAway) => (
          <label className="radiobutton" key={timeAway}>
            <input
              type="radio"
              name="time"
              value={timeAway}
              onChange={onSetTravel}
            />
            {timeAway}
          </label>
        ))}
      </section>
      <button className="button" type="button" onClick={onStepChange}>
        Summery
      </button>
    </>
  )
}

export default ThirdQuestion
