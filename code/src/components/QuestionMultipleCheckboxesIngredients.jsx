import React from "react"

import { RandomNotFriendName } from "../RandomChoices"

const QuestionMultipleCheckboxesIngredients = (props) => {
  const { notFriendName, ingredient, onIngredientChange } = props

  return (
    <div className="q-and-a-box">
      <h1>
        Select two ingredients for a sandwich that{" "}
        {notFriendName ? notFriendName : RandomNotFriendName()} will now eat for lunch
        each day
      </h1>
      <div className="checkboxes">
        
        <div className="checkbox-box">
          <input
            type="checkbox"
            id="ham"
            checked={ingredient.includes("ham")}
            onChange={() => onIngredientChange("ham")}
          />
          <label htmlFor="ham">
            ham
          </label>
        </div>

        <div className="checkbox-box">
          <input
            type="checkbox"
            id="cheese"
            checked={ingredient.includes("cheese")}
            onChange={() => onIngredientChange("cheese")}
          />
          <label htmlFor="cheese">
            cheese
          </label>
        </div>

        <div className="checkbox-box">
          <input
            type="checkbox"
            id="egg"
            checked={ingredient.includes("egg")}
            onChange={() => onIngredientChange("egg")}
          />
          <label htmlFor="egg">
            egg
          </label>
        </div>

        <div className="checkbox-box">
          <input
            type="checkbox"
            id="mayo"
            checked={ingredient.includes("mayo")}
            onChange={() => onIngredientChange("mayo")}
          />
          <label htmlFor="mayo">
            mayo
          </label>
        </div>

        <div className="checkbox-box">
          <input
            type="checkbox"
            id="turkey"
            checked={ingredient.includes("turkey")}
            onChange={() => onIngredientChange("turkey")}
          />
          <label htmlFor="turkey">
            turkey
          </label>
        </div>

        <div className="checkbox-box">
          <input
            type="checkbox"
            id="lettuce"
            checked={ingredient.includes("lettuce")}
            onChange={() => onIngredientChange("lettuce")}
          />
          <label htmlFor="lettuce">
            lettuce
          </label>
        </div>

        <div className="checkbox-box">
          <input
            type="checkbox"
            id="tomato"
            checked={ingredient.includes("tomato")}
            onChange={() => onIngredientChange("tomato")}
          />
          <label htmlFor="tomato">
            tomato
          </label>
        </div>

        <div className="checkbox-box">
          <input
            type="checkbox"
            id="tuna"
            checked={ingredient.includes("tuna")}
            onChange={() => onIngredientChange("tuna")}
          />
          <label htmlFor="tuna">
            tuna
          </label>
        </div>

      </div>
    </div>
  )
}

export default QuestionMultipleCheckboxesIngredients


/*

const ingredientItems = ["ham", "cheese", "chicken"]

        {ingredientItems.map((grrr) => (
        <div key={grrr}>
          <input
          className="checkbox-input"
            type="checkbox"
            id={grrr}
            onChange={ingredient.includes(grrr)}
            checked={() => onIngredientChange(grrr)}
          />
          <label htmlFor={grrr}>
            {grrr}
          </label>
        </div>
      ))}

*/