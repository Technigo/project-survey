import React from "react"

const QuestionSingleCheckoxLikeSports = (props) => {
  const { likeSports, onLikeSportsChange } = props

  return (
    <div className="q-and-a-box">
      <div className="checkbox-box">
        <label htmlFor="likeSports">
          <h1>Check this box if you like watching sports on TV.</h1>
        </label>
        <input
          className="checkbox-input"
          id="likeSports"
          type="checkbox"
          checked={likeSports}
          onChange={onLikeSportsChange}
        />
      </div>
    </div>
  )
}

export default QuestionSingleCheckoxLikeSports
