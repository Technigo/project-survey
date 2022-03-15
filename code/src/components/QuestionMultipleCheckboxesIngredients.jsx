import React from "react"

import { RandomNotFriendName } from "../RandomChoices"

let numberOfCheckedItems = 0
const QuestionMultipleCheckboxesIngredients = (props) => {
  const { notFriendName, ingredient, onIngredientChange, onStepChange } = props

  const testing = (event) => {
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

  const testing2 = (event) => {
    event.preventDefault()
    if (numberOfCheckedItems === 1) {
      alert("You need to select two ingredients!")
      return
    }
    onStepChange(1)
  }

  return (
    <>
      <div className="progress">
        <div className="progress-value question12"></div>
      </div>
      <form onSubmit={testing2}>
        <h1>
          Imagine that you can choose a boring sandwich for{" "}
          {notFriendName ? notFriendName : RandomNotFriendName()} to eat for
          lunch each day from now on. Choose two ingredients.
        </h1>
        <input
          type="checkbox"
          id="ham"
          name="test"
          value="ham"
          checked={ingredient.ham}
          onChange={testing}
        />
        <label htmlFor="ham">ham</label>{" "}
        <input
          type="checkbox"
          id="cheese"
          name="test"
          value="cheese"
          checked={ingredient.cheese}
          onChange={testing}
        />
        <label htmlFor="cheese">cheese</label>{" "}
        <input
          type="checkbox"
          id="egg"
          name="test"
          value="egg"
          checked={ingredient.egg}
          onChange={testing}
        />
        <label htmlFor="egg">egg</label>{" "}
        <input
          type="checkbox"
          id="mayo"
          name="test"
          value="mayo"
          checked={ingredient.mayo}
          onChange={onIngredientChange}
        />
        <label htmlFor="mayo">mayo</label>{" "}
        <input
          type="checkbox"
          id="turkey"
          name="test"
          value="turkey"
          checked={ingredient.turkey}
          onChange={onIngredientChange}
        />
        <label htmlFor="turkey">turkey</label>{" "}
        <input
          type="checkbox"
          id="lettuce"
          name="test"
          value="lettuce"
          checked={ingredient.lettuce}
          onChange={onIngredientChange}
        />
        <label htmlFor="lettuce">lettuce</label>{" "}
        <input
          type="checkbox"
          id="tuna"
          name="test"
          value="tuna"
          checked={ingredient.tuna}
          onChange={onIngredientChange}
        />
        <label htmlFor="tuna">tuna</label>{" "}
        <input
          type="checkbox"
          id="tomato"
          name="test"
          value="tomato"
          checked={ingredient.tomato}
          onChange={onIngredientChange}
        />
        <label htmlFor="tomato">tomato</label>{" "}
        <input
          type="checkbox"
          id="cucumber"
          name="test"
          value="cucumber"
          checked={ingredient.cucumber}
          onChange={onIngredientChange}
        />
        <label htmlFor="cucumber">cucumber</label>{" "}
        <button type='submit'>Next question</button>
        <button type="button" onClick={() => onStepChange(-1)}>Go back</button>
      </form>
    </>
  )
}

export default QuestionMultipleCheckboxesIngredients
