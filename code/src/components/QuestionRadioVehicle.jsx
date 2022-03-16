import React from "react"

import { RandomWeather } from "../RandomChoices"

const vehicleTypes = ["bicycle", "e-scooter", "motorcycle"]

const QuestionRadioVehicle = (props) => {
  const { weather, vehicle, onVehicleChange, onStepChange } = props

  return (
    <>
      <h1>
        What would you rather ride on your way to work under this{" "}
        {weather ? weather : RandomWeather()} sky?
      </h1>
      {vehicleTypes.map((type) => (
        <label key={type}>
          <input
            type="radio"
            value={type}
            onChange={onVehicleChange}
            checked={vehicle === type}
          />
          {type}
        </label>
      ))}
      {/* <button onClick={() => onStepChange(1)}>Next</button> */}
      <button onClick={() => onStepChange(-1)}>Back</button>
    </>
  )
}

export default QuestionRadioVehicle
