import React from "react"

const weatherTypes = ["sunny", "cloudy"]

const QuestionRadioWeather = (props) => {
  const { weather, onWeatherChange, onStepChange } = props

  return (
    <>
      <h1>Look by the window. Is it sunny or cloudy outside?</h1>
        {weatherTypes.map((type) => (
          <label key={type}>
            <input
              type="radio"
              value={type}
              onChange={onWeatherChange}
              checked={weather === type}
            />
            {type}
          </label>
        ))}
        {/* <button onClick={() => onStepChange(1)}>Next</button> */}
        <button onClick={() => onStepChange(-1)}>Back</button>
    </>
  )
}

export default QuestionRadioWeather
