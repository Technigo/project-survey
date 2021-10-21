import React from "react"

const FourthQuestion = ({ nights, onNightsChange, onStepChange }) => {
  return (
    <section className="form-wrapper">
      <div className="form-container">
        <label htmlFor="passengers">
          <h1>How long do you want to stay?</h1>
        </label>
        <form>
          <select onChange={onNightsChange} value={nights}>
            <option value="">Select nights</option>
            <option value="1 night">1 night</option>
            <option value="2 nights">2 nights</option>
            <option value="3 nights">3 nights</option>
            <option value="4 nights">4 nights</option>
            <option value="5 nights">5 nights</option>
            <option value="6 nights">6 nights</option>
            <option value="1 week">1 week</option>
            <option value="2 weeks">2 weeks</option>
            <option value="1 month">1 month</option>
          </select>
        </form>
        <button onClick={onStepChange}>
          Next <span role="img" aria-label="arrow"></span>
        </button>
      </div>
      <p className="current-step">
        ➤ Personal Information ➤ Destination ➤ Price conditions ➤ Nights
        <span className="progress"> ➤ Overview</span>
      </p>
    </section>
  )
}

export default FourthQuestion
