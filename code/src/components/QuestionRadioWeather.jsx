import React from "react"

const weatherItems = ["sunny", "cloudy"]

const QuestionRadioWeather = (props) => {
  const { weather, onWeatherChange } = props

  return (
    <>
      <h1>Look by the window. Is it sunny or cloudy outside?</h1>
        {weatherItems.map((item) => (
          <label key={item}>
            <input
              type="radio"
              value={item}
              onChange={onWeatherChange}
              checked={weather === item}
            />
            {item}
          </label>
        ))}
    </>
  )
}

export default QuestionRadioWeather
