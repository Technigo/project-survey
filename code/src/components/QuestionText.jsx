import React from "react"

const QuestionText = (props) => {
  const {name, onNameChange, onStepChange} = props

  return (
    <form>
      <h1>Enter your name: {name}</h1>
      <input
        type="text"
        onChange={onNameChange}
        value={name}
      />
      <button onClick={() => onStepChange(1)}>Next question</button>
    </form>
  )
}

export default QuestionText
