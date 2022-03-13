import React from "react"

const QuestionRangeSlider = (props) => {
  const { like, onLikeChange, onStepChange } = props

  return (
    <>
      <div class="progress">
        <div class="progress-value question5"></div>
      </div>
      <form>
        <label>
          How much do you like it on a scale of 1 to 5?
          <input
            type="range"
            min="1"
            max="5"
            value={like}
            defaultValue="3"
            onChange={onLikeChange}
          />
        </label>
        <button onClick={() => onStepChange(-1)}>Go back</button>
        <button onClick={() => onStepChange(1)}>Next question</button>
      </form>
    </>
  )
}

export default QuestionRangeSlider
