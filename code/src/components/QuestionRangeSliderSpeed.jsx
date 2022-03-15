import React from "react"

import { RandomVehicle } from '../RandomChoices'

const QuestionRangeSliderSpeed = (props) => {
  const { vehicle, onSpeedChange, onStepChange } = props

  return (
    <>
      <div className="progress">
        <div className="progress-value question5"></div>
      </div>
      <form onSubmit={() => onStepChange(1)}>
        <label>
        <h1>Let’s be honest, would you be more the “slowing the traffic” or “scaring the old ladies” type on your {vehicle ? vehicle : RandomVehicle()}?</h1>
          <input
            type="range"
            min="1"
            max="3"
            defaultValue="2"
            onChange={onSpeedChange}
          />
        </label>
        <button type='submit'>Next question</button>
        <button type="button" onClick={() => onStepChange(-1)}>Go back</button>
      </form>
    </>
  )
}

export default QuestionRangeSliderSpeed
