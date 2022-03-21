import React from 'react'

const ThirdQuestion = ({ options, onSetTravel, onStepChange }) => {
  return (
    <>
      <section className="time-container">
        <h2 className="section-heading">
          How long time do u wanna be on holiday for?
        </h2>
        <select
          htmlFor="options"
          className="dropdown"
          id="options"
          value={options}
          onChange={onSetTravel}
        >
          <option>Pick one from below</option>
          <option value="1 week">1 week</option>
          <option value="2 weeks">2 weeks</option>
          <option value="1 month">1 month</option>
          <option value="3 months">3 months</option>
          <option value="6 months">6 months</option>
        </select>
      </section>
      <button className="button" type="button" onClick={onStepChange}>
        Summery
      </button>
    </>
  )
}

export default ThirdQuestion
