import React from "react"

const QuestionSingleCheckoxLikeSports = (props) => {
  const { likeSports, onLikeSportsChange } = props

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
    </>
  )
}

export default QuestionSingleCheckoxLikeSports
