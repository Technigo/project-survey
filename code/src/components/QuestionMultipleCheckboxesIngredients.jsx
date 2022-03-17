import React from "react"

import { RandomNotFriendName } from "../RandomChoices"

// const ingredientItems = ["ham", "cheese", "chicken"]

const QuestionMultipleCheckboxesIngredients = (props) => {
  const { notFriendName, ingredient, onIngredientChange } = props

console.log(ingredient)

  return (
    <>
      <h1>
        Imagine that you can choose a boring sandwich for{" "}
        {notFriendName ? notFriendName : RandomNotFriendName()} to eat for lunch
        each day from now on. Choose two ingredients.
      </h1>

      {/* {ingredientItems.map((grrr) => (
        <div key={grrr}>
          <input
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

      <input
        type="checkbox"
        id="ham"
        // value="ham"
        checked={ingredient.includes("ham")}
        onChange={() => onIngredientChange("ham")}
      />
      <label htmlFor="ham">ham</label>

      <input
        type="checkbox"
        id="cheese"
        // value="cheese"
        checked={ingredient.includes("cheese")}
        onChange={() => onIngredientChange("cheese")}
      />
      <label htmlFor="cheese">cheese</label>

      <input
        type="checkbox"
        id="egg"
        // value="egg"
        checked={ingredient.includes("egg")}
        onChange={() => onIngredientChange("egg")}
      />
      <label htmlFor="egg">egg</label>

      <input
        type="checkbox"
        id="mayo"
        // value="mayo"
        checked={ingredient.includes("mayo")}
        onChange={() => onIngredientChange("mayo")}
      />
      <label htmlFor="mayo">mayo</label>

      <input
        type="checkbox"
        id="turkey"
        // value="turkey"
        checked={ingredient.includes("turkey")}
        onChange={() => onIngredientChange("turkey")}
      />
      <label htmlFor="turkey">turkey</label>

      <input
        type="checkbox"
        id="lettuce"
        // value="lettuce"
        checked={ingredient.includes("lettuce")}
        onChange={() => onIngredientChange("lettuce")}
      />
      <label htmlFor="lettuce">lettuce</label>

      <input
        type="checkbox"
        id="tomato"
        // value="tomato"
        checked={ingredient.includes("tomato")}
        onChange={() => onIngredientChange("tomato")}
      />
      <label htmlFor="tomato">tomato</label>

      <input
        type="checkbox"
        id="tuna"
        // value="tuna"
        checked={ingredient.includes("tuna")}
        onChange={() => onIngredientChange("tuna")}
      />
      <label htmlFor="tuna">tuna</label>

      <input
        type="checkbox"
        id="cucumber"
        // value="cucumber"
        checked={ingredient.includes("cucumber")}
        onChange={() => onIngredientChange("cucumber")}
      />
      <label htmlFor="cucumber">cucumber</label>
    </>
  )
}

export default QuestionMultipleCheckboxesIngredients
