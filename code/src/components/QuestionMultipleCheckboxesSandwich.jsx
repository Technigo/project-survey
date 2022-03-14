import React from "react"

const QuestionMultipleCheckboxesSandwich = (props) => {
  const { sandwich, onSandwichChange, onStepChange } = props

  return (
    <>
      <div className="progress">
        <div className="progress-value question12"></div>
      </div>
      <form>
      <h1>Imagine that you can only eat the same boring sandwich from now on. Choose two ingredients that you want in it.</h1>
        <label htmlFor="ham">ham</label>{" "}
        <input
          type="checkbox"
          id="ham"
          name="ham"
          value="ham"
          checked={sandwich.ham}
          onChange={onSandwichChange}
        />
        <label htmlFor="cheese">cheese</label>{" "}
        <input
          type="checkbox"
          id="cheese"
          name="cheese"
          value="cheese"
          checked={sandwich.cheese}
          onChange={onSandwichChange}
        />
        <label htmlFor="egg">egg</label>{" "}
        <input
          type="checkbox"
          id="egg"
          name="egg"
          value="egg"
          checked={sandwich.egg}
          onChange={onSandwichChange}
        />
        <label htmlFor="mayo">mayo</label>{" "}
        <input
          type="checkbox"
          id="mayo"
          name="mayo"
          value="mayo"
          checked={sandwich.mayo}
          onChange={onSandwichChange}
        />
        <label htmlFor="turkey">turkey</label>{" "}
        <input
          type="checkbox"
          id="turkey"
          name="turkey"
          value="turkey"
          checked={sandwich.turkey}
          onChange={onSandwichChange}
        />
        <label htmlFor="lettuce">lettuce</label>{" "}
        <input
          type="checkbox"
          id="lettuce"
          name="lettuce"
          value="lettuce"
          checked={sandwich.lettuce}
          onChange={onSandwichChange}
        />
        <label htmlFor="tuna">tuna</label>{" "}
        <input
          type="checkbox"
          id="tuna"
          name="tuna"
          value="tuna"
          checked={sandwich.tuna}
          onChange={onSandwichChange}
        />
        <label htmlFor="tomato">tomato</label>{" "}
        <input
          type="checkbox"
          id="tomato"
          name="tomato"
          value="tomato"
          checked={sandwich.tomato}
          onChange={onSandwichChange}
        />
        <label htmlFor="cucumber">cucumber</label>{" "}
        <input
          type="checkbox"
          id="cucumber"
          name="cucumber"
          value="cucumber"
          checked={sandwich.cucumber}
          onChange={onSandwichChange}
        />
        <button onClick={() => onStepChange(1)}>Next question</button>
        <button onClick={() => onStepChange(-1)}>Go back</button>
      </form>
    </>
  )
}

export default QuestionMultipleCheckboxesSandwich
