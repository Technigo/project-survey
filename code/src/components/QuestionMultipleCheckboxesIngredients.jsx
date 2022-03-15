import React from "react"

import { RandomNotFriendName } from "../RandomChoices"

let numberOfCheckedItems = 0
const QuestionMultipleCheckboxesIngredients = (props) => {
  const { notFriendName, ingredient, onIngredientChange, onStepChange } = props

  const checkIngredient = (event) => {
    const checkboxes = document.getElementsByName("test")
    numberOfCheckedItems = 0
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) numberOfCheckedItems++
    }
    if (numberOfCheckedItems > 2) {
      numberOfCheckedItems = 2
      alert("You can't select more than two ingredients!")
      return
    }
    onIngredientChange(event)
  }

  const submitIngredients = (event) => {
    event.preventDefault()
    if (numberOfCheckedItems === 1) {
      alert("You need to select two ingredients!")
      return
    }
    onStepChange(1)
  }
console.log(ingredient.ham)
  return (
    <>
      <div className="progress">
        <div className="progress-value question12"></div>
      </div>
      <form onSubmit={submitIngredients}>
        <h1>
          Imagine that you can choose a boring sandwich for{" "}
          {notFriendName ? notFriendName : RandomNotFriendName()} to eat for
          lunch each day from now on. Choose two ingredients.
        </h1>
        <input
          type="checkbox"
          id="ham"
          name="ham"
          value="ham"
          checked={ingredient.ham}
          onChange={checkIngredient}
        />
        <label htmlFor="ham">ham</label>{" "}
        <input
          type="checkbox"
          id="cheese"
          name="cheese"
          value="cheese"
          checked={ingredient.cheese}
          onChange={checkIngredient}
        />
        <label htmlFor="cheese">cheese</label>{" "}
        <input
          type="checkbox"
          id="egg"
          name="egg"
          value="egg"
          checked={ingredient.egg}
          onChange={checkIngredient}
        />
        <label htmlFor="egg">egg</label>{" "}
        <input
          type="checkbox"
          id="mayo"
          name="mayo"
          value="mayo"
          checked={ingredient.mayo}
          onChange={checkIngredient}
        />
        <label htmlFor="mayo">mayo</label>{" "}
        <input
          type="checkbox"
          id="turkey"
          name="turkey"
          value="turkey"
          checked={ingredient.turkey}
          onChange={checkIngredient}
        />
        <label htmlFor="turkey">turkey</label>{" "}
        <input
          type="checkbox"
          id="lettuce"
          name="lettuce"
          value="lettuce"
          checked={ingredient.lettuce}
          onChange={checkIngredient}
        />
        <label htmlFor="lettuce">lettuce</label>{" "}
        <input
          type="checkbox"
          id="tuna"
          name="tuna"
          value="tuna"
          checked={ingredient.tuna}
          onChange={checkIngredient}
        />
        <label htmlFor="tuna">tuna</label>{" "}
        <input
          type="checkbox"
          id="tomato"
          name="tomato"
          value="tomato"
          checked={ingredient.tomato}
          onChange={checkIngredient}
        />
        <label htmlFor="tomato">tomato</label>{" "}
        <input
          type="checkbox"
          id="cucumber"
          name="cucumber"
          value="cucumber"
          checked={ingredient.cucumber}
          onChange={checkIngredient}
        />
        <label htmlFor="cucumber">cucumber</label>{" "}
        <button type='submit'>Next question</button>
        <button type="button" onClick={() => onStepChange(-1)}>Go back</button>
      </form>
    </>
  )
}

export default QuestionMultipleCheckboxesIngredients
