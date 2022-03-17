import React from "react"

import { RandomNotFriendName } from "../RandomChoices"

// const ingredientItems = ["ham", "cheese", "chicken"]

const QuestionMultipleCheckboxesIngredients = (props) => {
  const { notFriendName, ingredient, onIngredientChange } = props

  console.log(ingredient)

  return (
    <div className="q-and-a-box">
      <h1>
        Imagine that you can choose a boring sandwich for{" "}
        {notFriendName ? notFriendName : RandomNotFriendName()} to eat for lunch
        each day from now on. Choose two ingredients.
      </h1>
      <div className="checkboxes">
        {/* {ingredientItems.map((grrr) => (
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
      ))} */}
        <div className="checkbox-box">
          <input
            className="checkbox-input"
            type="checkbox"
            id="ham"
            // value="ham"
            checked={ingredient.includes("ham")}
            onChange={() => onIngredientChange("ham")}
          />
          <label className="checkbox-label" htmlFor="ham">
            ham
          </label>
        </div>

        <div className="checkbox-box">
          <input
            className="checkbox-input"
            type="checkbox"
            id="cheese"
            // value="cheese"
            checked={ingredient.includes("cheese")}
            onChange={() => onIngredientChange("cheese")}
          />
          <label className="checkbox-label" htmlFor="cheese">
            cheese
          </label>
        </div>

        <div className="checkbox-box">
          <input
            className="checkbox-input"
            type="checkbox"
            id="egg"
            // value="egg"
            checked={ingredient.includes("egg")}
            onChange={() => onIngredientChange("egg")}
          />
          <label className="checkbox-label" htmlFor="egg">
            egg
          </label>
        </div>

        <div className="checkbox-box">
          <input
            className="checkbox-input"
            type="checkbox"
            id="mayo"
            // value="mayo"
            checked={ingredient.includes("mayo")}
            onChange={() => onIngredientChange("mayo")}
          />
          <label className="checkbox-label" htmlFor="mayo">
            mayo
          </label>
        </div>

        <div className="checkbox-box">
          <input
            className="checkbox-input"
            type="checkbox"
            id="turkey"
            // value="turkey"
            checked={ingredient.includes("turkey")}
            onChange={() => onIngredientChange("turkey")}
          />
          <label className="checkbox-label" htmlFor="turkey">
            turkey
          </label>
        </div>

        <div className="checkbox-box">
          <input
            className="checkbox-input"
            type="checkbox"
            id="lettuce"
            // value="lettuce"
            checked={ingredient.includes("lettuce")}
            onChange={() => onIngredientChange("lettuce")}
          />
          <label className="checkbox-label" htmlFor="lettuce">
            lettuce
          </label>
        </div>

        <div className="checkbox-box">
          <input
            className="checkbox-input"
            type="checkbox"
            id="tomato"
            // value="tomato"
            checked={ingredient.includes("tomato")}
            onChange={() => onIngredientChange("tomato")}
          />
          <label className="checkbox-label" htmlFor="tomato">
            tomato
          </label>
        </div>

        <div className="checkbox-box">
          <input
            className="checkbox-input"
            type="checkbox"
            id="tuna"
            // value="tuna"
            checked={ingredient.includes("tuna")}
            onChange={() => onIngredientChange("tuna")}
          />
          <label className="checkbox-label" htmlFor="tuna">
            tuna
          </label>
        </div>

        <div className="checkbox-box">
          <input
            className="checkbox-input"
            type="checkbox"
            id="cucumber"
            // value="cucumber"
            checked={ingredient.includes("cucumber")}
            onChange={() => onIngredientChange("cucumber")}
          />
          <label className="checkbox-label" htmlFor="cucumber">
            cucumber
          </label>
        </div>
      </div>
    </div>
  )
}

export default QuestionMultipleCheckboxesIngredients
