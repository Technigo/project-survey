import React from "react"

const ThirdQuestion = ({
  priceConditions,
  onPriceConditionsChange,
  onStepChange,
  onPreStepChange,
}) => {
  return (
    <section className="form-wrapper">
      <div className="form-container">
        <h1 className="thirdQ-header">
          Do you want the cheapest or fastest way?{" "}
        </h1>
        <div className="form-parent">
          <form>
            <label htmlFor="fastest">
              <p>
                The Fastest way
                <span className="radio-btn">
                  <input
                    type="radio"
                    value="fastest"
                    onChange={onPriceConditionsChange}
                    checked={priceConditions === "fastest"}
                  />
                </span>
              </p>
            </label>

            <label htmlFor="cheapest">
              <p>
                The cheapest way
                <span className="radio-btn">
                  <input
                    type="radio"
                    value="cheapest"
                    onChange={onPriceConditionsChange}
                    checked={priceConditions === "cheapest"}
                  />
                </span>
              </p>
            </label>

            <label htmlFor="combination">
              <p>
                A combination
                <span className="radio-btn">
                  <input
                    type="radio"
                    value="combination"
                    onChange={onPriceConditionsChange}
                    checked={priceConditions === "combination"}
                  />
                </span>
              </p>
            </label>
          </form>
        </div>
        <button className="back-btn" onClick={onPreStepChange}>
          <span className="back-arrow" role="img" aria-label="arrow"></span>
          Go back
        </button>
        <button onClick={onStepChange}>
          Next <span role="img" aria-label="arrow"></span>
        </button>
      </div>
      <p className="current-step">
        ➤ Personal Information ➤ Destination ➤ Price conditions{" "}
        <span className="progress"> ➤ Departure ➤ Overview</span>
      </p>
    </section>
  )
}

export default ThirdQuestion
