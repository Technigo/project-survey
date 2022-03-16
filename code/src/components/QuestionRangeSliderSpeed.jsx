import React from "react"

import { RandomVehicle } from '../RandomChoices'

const QuestionRangeSliderSpeed = (props) => {
  const { vehicle, onSpeedChange, onStepChange } = props

  return (
    <>
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
        {/* <button onClick={() => onStepChange(1)}>Next</button> */}
        <button onClick={() => onStepChange(-1)}>Back</button>
    </>
  )
}

export default QuestionRangeSliderSpeed
