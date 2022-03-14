import React from "react"

const QuestionRangeSliderSpeed = (props) => {
  const { vehicleType, onSpeedChange, onStepChange } = props

  return (
    <>
      <div className="progress">
        <div className="progress-value question5"></div>
      </div>
      <form>
        <label>
        <h1>Let’s be honest, would you be more the “slowing the traffic” or “scaring the old ladies” type on your {vehicleType}?</h1>
          <input
            type="range"
            min="1"
            max="3"
            defaultValue="2"
            onChange={onSpeedChange}
          />
        </label>
        <button onClick={() => onStepChange(1)}>Next question</button>
        <button onClick={() => onStepChange(-1)}>Go back</button>
      </form>
    </>
  )
}

export default QuestionRangeSliderSpeed
