import React from "react"

const beverageItems = ["coffee", "tea"]

const QuestionRadioBeverage = (props) => {
  const { beverage, onBeverageChange } = props

  return (
    <>
      <h1>Are you team tea or team coffee?</h1>
      {beverageItems.map((item) => (
        <label key={item}>
          <input
            type="radio"
            value={item}
            onChange={onBeverageChange}
            checked={beverage === item}
          />
          {item}
        </label>
      ))}
    </>
  )
}

export default QuestionRadioBeverage
