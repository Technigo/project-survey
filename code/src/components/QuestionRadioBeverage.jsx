import React from "react"

const beverageTypes = ["coffee", "tea"]

const QuestionRadioBeverage = (props) => {
  const { beverageType, onBeverageTypeChange, onStepChange } = props

  return (
    <>
      <div className="progress">
        <div className="progress-value question8"></div>
      </div>
      <form>
      <h1>Are you team tea or team coffee?</h1>
        {beverageTypes.map((type) => (
          <label key={type}>
            <input
              type="radio"
              value={type}
              onChange={onBeverageTypeChange}
              checked={beverageType === type}
            />
            {type}
          </label>
        ))}
        <button onClick={() => onStepChange(1)}>Next question</button>
        <button onClick={() => onStepChange(-1)}>Go back</button>
      </form>
    </>
  )
}

export default QuestionRadioBeverage
