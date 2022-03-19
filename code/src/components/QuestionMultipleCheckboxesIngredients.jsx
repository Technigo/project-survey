import React from "react"

import { RandomNotFriendName } from "./RandomChoices"

const ingredientItems = [
  "ham",
  "cheese",
  "chicken",
  "egg",
  "mayo",
  "lettuce",
  "tomato",
  "tuna",
]

const QuestionMultipleCheckboxesIngredients = (props) => {
  const { notFriendName, ingredient, onIngredientChange } = props

  return (
    <div className="q-and-a-box">
      <h1 tabIndex="1">
        Select two ingredients for a sandwich that{" "}
        {notFriendName ? notFriendName : RandomNotFriendName()} will now eat for
        lunch each day
      </h1>
      <div className="checkboxes">
        {ingredientItems.map((item) => (
          <div className="checkbox-box" key={item}>
            <input
              type="checkbox"
              id={item}
              checked={ingredient.includes(item)}
              onChange={() => onIngredientChange(item)}
            />
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuestionMultipleCheckboxesIngredients
