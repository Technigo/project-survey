import React from "react"

import { RandomVehicle } from "../RandomChoices"

const QuestionRangeSliderSpeed = (props) => {
  const { vehicle, onSpeedChange } = props

  return (
    <div className="q-and-a-box">
      <label htmlFor="speed">
        <h1>
          Use the slider to select your usual speed on your{" "}
          {vehicle ? vehicle : RandomVehicle()}
        </h1>
      </label>
      <input
        className="slider"
        id="speed"
        type="range"
        min="1"
        max="3"
        defaultValue="2"
        onChange={onSpeedChange}
      />
      <div className="speeds-box">
        <span>slow</span>
        <span>normal</span>
        <span>fast</span>
      </div>
    </div>
  )
}

export default QuestionRangeSliderSpeed
