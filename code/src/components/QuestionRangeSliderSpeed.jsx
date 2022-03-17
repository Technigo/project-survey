import React from "react"

import { RandomVehicle } from "../RandomChoices"

const QuestionRangeSliderSpeed = (props) => {
  const { vehicle, onSpeedChange } = props

  return (
    <div className="q-and-a-box">
      <label htmlFor="speed">
        <h1>
          Let’s be honest, would you be more the “slowing the traffic” or
          “scaring the old ladies” type on your{" "}
          {vehicle ? vehicle : RandomVehicle()}?
        </h1>
      </label>
      <input
        id="speed"
        type="range"
        min="1"
        max="3"
        defaultValue="2"
        onChange={onSpeedChange}
      />
    </div>
  )
}

export default QuestionRangeSliderSpeed
