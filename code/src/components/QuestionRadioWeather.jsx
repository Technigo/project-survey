import React from "react"

const weatherItems = ["sunny", "cloudy"]

const QuestionRadioWeather = (props) => {
  const { weather, onWeatherChange } = props

  return (
    <div className="q-and-a-box">
      <h1 tabIndex="1">Look by the window and select how is the sky</h1>
      <div>
        {weatherItems.map((item) => (
          <div className="radio-box" key={item}>
            <input
              id={item}
              type="radio"
              value={item}
              onChange={onWeatherChange}
              checked={weather === item}
            />
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuestionRadioWeather
