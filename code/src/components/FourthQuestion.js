import React from "react"

const FourthQuestion = ({
  departure,
  onDepartureChange,
  onStepChange,
  onPreStepChange,
}) => {
  return (
    <section className="form-wrapper">
      <div className="form-container">
        <label htmlFor="passengers">
          <h1 className="depature-title">Choose departure day</h1>
          <form>
            <input
              className="calendar"
              type="date"
              name="dates"
              min="2021-11-01"
              max="2022-11-01"
              onChange={onDepartureChange}
              checked={departure === ""}
              required
            />
            <span className="validity"></span>
          </form>
        </label>
        <button className="back-btn" onClick={onPreStepChange}>
          <span className="back-arrow" role="img" aria-label="arrow"></span>
          Go back
        </button>
        <button onClick={onStepChange}>
          Next <span role="img" aria-label="arrow"></span>
        </button>
      </div>
      <p className="current-step">
        ➤ Personal Information ➤ Destination ➤ Price conditions ➤ Departure
        <span className="progress"> ➤ Overview</span>
      </p>
    </section>
  )
}

export default FourthQuestion
