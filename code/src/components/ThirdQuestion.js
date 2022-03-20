import React from 'react'

const ThirdQuestion = ({ onSetTime, choice, onStepChange }) => {
  const timeArray = ['1 week ', '2 weeks', '3 months', '6 months']

  return (
    <>
      <section className="time-container">
        <h2 className="section-heading">How long time do u wanna be away?</h2>
        {timeArray.map((choice) => (
          <label className="radiobutton" key={choice}>
            <input
              type="radio"
              value={choice}
              name="time"
              onChange={onSetTime}
            />
            {choice}
          </label>
        ))}
        <button className="button" type="button" onClick={onStepChange}>
          Se your survey
        </button>
      </section>
    </>
  )
}

export default ThirdQuestion
