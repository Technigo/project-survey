import React from "react"

const vehicleTypes = ["bicycle", "e-scooter", "motorcycle"]

const QuestionRadioVehicle = (props) => {
  const { weatherType, vehicleType, onVehicleTypeChange, onStepChange } = props

  return (
    <>
      <div className="progress">
        <div className="progress-value question4"></div>
      </div>
      <form>
      <h1>What would you rather ride on your way to work under this {weatherType} sky?</h1>
        {vehicleTypes.map((type) => (
          <label key={type}>
            <input
              type="radio"
              value={type}
              onChange={onVehicleTypeChange}
              checked={vehicleType === type}
            />
            {type}
          </label>
        ))}
        <button onClick={() => onStepChange(1)}>Next question</button>
        <button onClick={() => onStepChange(-1)}>Go back</button>
      </form>
    </>
  )
}

export default QuestionRadioVehicle
