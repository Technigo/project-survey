import React from "react"

import { RandomWeather } from "./RandomChoices"

const vehicleItems = ["bicycle", "e-scooter", "motorcycle"]

const QuestionRadioVehicle = (props) => {
  const { weather, vehicle, onVehicleChange } = props

  return (
    <div className="q-and-a-box">
      <h1 tabIndex="1">
        Select what you would rather ride on this{" "}
        {weather ? weather : RandomWeather()} day
      </h1>
      <div>
        {vehicleItems.map((item) => (
          <div className="radio-box" key={item}>
            <input
              id={item}
              type="radio"
              value={item}
              onChange={onVehicleChange}
              checked={vehicle === item}
            />
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuestionRadioVehicle
