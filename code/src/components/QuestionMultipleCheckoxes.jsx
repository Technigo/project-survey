import React from "react"

const QuestionMultipleCheckoxes = (props) => {
  const { multiple, onMultipleChange, onStepChange } = props

  return (
    <>
      <div class="progress">
        <div class="progress-value question4"></div>
      </div>
      <form>
        Type of newletter?
        <label htmlFor="test1">Test 1</label>{" "}
        <input
          type="checkbox"
          id="test1"
          name="test1"
          value="test1"
          checked={multiple.test1}
          onChange={onMultipleChange}
        />
        <label htmlFor="test2">Test 2</label>
        <input
          type="checkbox"
          id="test2"
          name="test2"
          value="test2"
          checked={multiple.test2}
          onChange={onMultipleChange}
        />
        <button onClick={() => onStepChange(-1)}>Go back</button>
        <button onClick={() => onStepChange(1)}>Next question</button>
      </form>
    </>
  )
}

export default QuestionMultipleCheckoxes
