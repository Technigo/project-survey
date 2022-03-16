import React from "react"

const beverageTypes = ["coffee", "tea"]

const QuestionRadioBeverage = (props) => {
  const { beverage, onBeverageChange, onStepChange } = props

  return (
    <>
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
      {/* <button onClick={() => onStepChange(1)}>Next</button> */}
      <button onClick={() => onStepChange(-1)}>Back</button>
    </>
  )
}

export default QuestionRadioBeverage
