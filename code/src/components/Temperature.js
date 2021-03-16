import React from 'react'


const Temperature = (props) => {
  const temperatureValues = ['37°', '37.5°', '38°', '39°']

  const onTemperatureChange = (event) => {
    props.setTemperature(event.target.value)
  }

  return (
    <>
      <h2>Please enter your current temperature</h2>
      {temperatureValues.map(resmes => (
        <div className="radio-btn">
          <label htmlFor="temp">{resmes}</label>
          <input name="temp" type="radio"
          onChange={onTemperatureChange}
          value={resmes}
          checked={props.temperature === resmes} />
        </div>
      ))}
  </>
  )
}

export default Temperature

