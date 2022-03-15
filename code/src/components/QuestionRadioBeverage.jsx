import React from "react"

const beverageTypes = ["coffee", "tea"]

const QuestionRadioBeverage = (props) => {
  const { beverage, onBeverageChange, onStepChange } = props

  return (
    <>
      <div className="progress">
        <div className="progress-value question8"></div>
      </div>
      <form onSubmit={() => onStepChange(1)}>
      <h1>Are you team tea or team coffee?</h1>
        {beverageTypes.map((type) => (
          <label key={type}>
            <input
              type="radio"
              value={type}
              onChange={onBeverageChange}
              checked={beverage === type}
            />
            {type}
          </label>
        ))}
        <button type='submit'>Next question</button>
        <button type="button" onClick={() => onStepChange(-1)}>Go back</button>
      </form>
    </>
  )
}

export default QuestionRadioBeverage
