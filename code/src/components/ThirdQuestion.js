import React from "react"

const ThirdQuestion = ({ timeButton, onTimeButtonChange, onStepChange }) => {
  return (
    <section className="form-wrapper">
      <div className="form-container">
        <h1>Choose the length of your stay</h1>
        <div className="form-parent">
          <form>
            <label htmlFor="weekend">
              <p>
                For a weekend
                <span className="radio-btn">
                  <input
                    type="radio"
                    value="weekend getaway"
                    onChange={onTimeButtonChange}
                    checked={timeButton === "weekend getaway"}
                  />
                </span>
              </p>
            </label>

            <label htmlFor="week">
              <p>
                For one week
                <span className="radio-btn">
                  <input
                    type="radio"
                    value="one week"
                    onChange={onTimeButtonChange}
                    checked={timeButton === "one week"}
                  />
                </span>
              </p>
            </label>

            <label htmlFor="month">
              <p>
                For a month
                <span className="radio-btn">
                  <input
                    type="radio"
                    value="one month stay"
                    onChange={onTimeButtonChange}
                    checked={timeButton === "one month stay"}
                  />
                </span>
              </p>
            </label>
          </form>
          <button onClick={onStepChange}>
            See overview <span role="img" aria-label="arrow"></span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ThirdQuestion
