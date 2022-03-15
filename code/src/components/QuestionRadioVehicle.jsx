import React from "react"

import { RandomWeather } from '../RandomChoices'

const vehicleTypes = ["bicycle", "e-scooter", "motorcycle"]

const QuestionRadioVehicle = (props) => {
  const { weather, vehicle, onVehicleChange, onStepChange } = props

  return (
    <>
      <div className="progress">
        <div className="progress-value question4"></div>
      </div>
      <form onSubmit={() => onStepChange(1)}>
      <h1>What would you rather ride on your way to work under this {weather ? weather : RandomWeather()} sky?</h1>
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
        <button type='submit'>Next question</button>
        <button type="button" onClick={() => onStepChange(-1)}>Go back</button>
      </form>
    </>
  )
}

export default QuestionRadioVehicle
