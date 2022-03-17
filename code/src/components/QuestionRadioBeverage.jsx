import React from "react"

const beverageItems = ["coffee", "tea"]

const QuestionRadioBeverage = (props) => {
  const { beverage, onBeverageChange } = props

  return (
    <div className="q-and-a-box">
      <h1>Choose your team</h1>
      <div>
        {beverageItems.map((item) => (
          <div className="radio-box" key={item}>
            <input
              id={item}
              type="radio"
              value={item}
              onChange={onBeverageChange}
              checked={beverage === item}
            />
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuestionRadioBeverage
