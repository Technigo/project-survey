import React from "react"

const weatherTypes = ["sunny", "cloudy"]

const QuestionRadioWeather = (props) => {
  const { weatherType, onWeatherTypeChange, onStepChange } = props

  return (
    <>
      <div className="progress">
        <div className="progress-value question3"></div>
      </div>
      <form>
      <h1>Look by the window. Is it sunny or cloudy outside?</h1>
        {weatherTypes.map((type) => (
          <label key={type}>
            <input
              type="radio"
              value={type}
              onChange={onWeatherTypeChange}
              checked={weatherType === type}
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

export default QuestionRadioWeather
