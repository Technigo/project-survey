import React from "react"

const QuestionSingleCheckoxLikeSports = (props) => {
  const { likeSports, onLikeSportsChange, onStepChange } = props

  return (
    <>
        <label>
        <h1>Check this box if you like watching sports on TV.</h1>
          <input
            type="checkbox"
            checked={likeSports}
            onChange={onLikeSportsChange}
          />
        </label>

        {/* <button onClick={() => onStepChange(likeSports ? 1 : 2)}>Next</button> */}
        <button onClick={() => onStepChange(-1)}>Back</button>
    </>
  )
}

export default QuestionSingleCheckoxLikeSports
