import React from "react"

const ThirdQuestion = ({
  priceConditions,
  onPriceConditionsChange,
  onStepChange,
}) => {
  return (
    <section className="form-wrapper">
      <div className="form-container">
        <h1 className="fourthQ-header">
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
          <button onClick={onStepChange}>
            Next <span role="img" aria-label="arrow"></span>
          </button>
        </div>
      </div>
      <p className="current-step">
        ➤ Personal Information ➤ Destination ➤ Price conditions{" "}
        <span className="progress"> ➤ Nights ➤ Overview</span>
      </p>
    </section>
  )
}

export default ThirdQuestion
