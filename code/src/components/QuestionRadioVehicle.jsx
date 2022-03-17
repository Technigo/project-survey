import React from "react"

import { RandomWeather } from "../RandomChoices"

const vehicleItems = ["bicycle", "e-scooter", "motorcycle"]

const QuestionRadioVehicle = (props) => {
  const { weather, vehicle, onVehicleChange } = props

  return (
    <>
      <h1>
        What would you rather ride on your way to work under this{" "}
        {weather ? weather : RandomWeather()} sky?
      </h1>
      {vehicleItems.map((item) => (
        <label key={item}>
          <input
            type="radio"
            value={item}
            onChange={onVehicleChange}
            checked={vehicle === item}
          />
          {item}
        </label>
      ))}
    </>
  )
}

export default QuestionRadioVehicle
