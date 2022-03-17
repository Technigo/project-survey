import React from "react"

const weatherItems = ["sunny", "cloudy"]

const QuestionRadioWeather = (props) => {
  const { weather, onWeatherChange } = props

  return (
    <div className="q-and-a-box">
      <h1>Look by the window. Is it sunny or cloudy outside?</h1>
      <div className="radio-buttons">
      {weatherItems.map((item) => (
        <div className="radio-box">
          <input
            className="radio-input"
            id={item}
            type="radio"
            value={item}
            onChange={onWeatherChange}
            checked={weather === item}
          />
          <label className="radio-label" htmlFor={item} key={item}>
            {item}
          </label>
        </div>
      ))}
      </div>
    </div>
  )
}

export default QuestionRadioWeather
