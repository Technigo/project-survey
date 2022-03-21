import React from 'react'

const ThirdQuestion = ({ options, onSetTravel, onStepChange }) => {
  return (
    <>
      <section className="time-container">
        <h2 className="section-heading">
          How long time do u wanna be on holiday for?
        </h2>
        <select
          htmlFor="goal-option"
          className="dropdown"
          id="option"
          value={options}
          onChange={onSetTravel}
        >
          <option disabled>Pick one from below</option>
          <option>1 week</option>
          <option>2 weeks</option>
          <option>1 month</option>
          <option>3 months</option>
          <option>6 months</option>
        </select>
      </section>
      <button className="button" type="button" onClick={onStepChange}>
        Summery
      </button>
    </>
  )
}

export default ThirdQuestion
