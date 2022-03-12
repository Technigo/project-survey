import React from "react"

const fruits = ["apple", "orange", "banana"]

const QuestionMultipleCheckoxes = (props) => {
  const { fruitLiked, onFruitLikedChange, onFinalQuestion } = props

  return (
    <form>
      Which fruits?
      {fruits.map((fruit) => (
        <label key={fruitLiked}>
        <input
          type="checkbox"
          value={fruit}
          checked={fruitLiked}
          onChange={onFruitLikedChange}
        />
      <button onClick={onFinalQuestion}>See summary</button>
      </label>
      ))}
      <button onClick={onFinalQuestion}>See summary</button>
    </form>
  )
}

export default QuestionMultipleCheckoxes
