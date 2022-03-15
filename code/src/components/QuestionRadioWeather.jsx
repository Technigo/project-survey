import React from "react"

const weatherTypes = ["sunny", "cloudy"]

const QuestionRadioWeather = (props) => {
  const { weather, onWeatherChange, onStepChange } = props

  return (
    <>
      <div className="progress">
        <div className="progress-value question3"></div>
      </div>
      <form onSubmit={() => onStepChange(1)}>
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
        <button type='submit'>Next question</button>
        <button type="button" onClick={() => onStepChange(-1)}>Go back</button>
      </form>
    </>
  )
}

export default QuestionRadioWeather
