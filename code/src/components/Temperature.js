import React, { useState } from 'react'


const Temperature = () => {
  const temperatureValues = ['37°', '37.5°', '38°', '39°']

  const [temperature, setTemperature] = useState ('')

  const onTemperatureChange = (e) => {
    setTemperature(e.target.value)
  }

  return (
    <>
    <form>
      <label>Please enter your current temperature
      {temperatureValues.map(resmes => (
        <label key={resmes}>
        <input type="radio"
        onChange={onTemperatureChange}
        value={resmes}
        checked={temperature === resmes} />

        {resmes}

        </label>
      ))}
      </label>
    </form>
    <h1>Your temperature is {temperature}</h1>
  </>
  )
}

export default Temperature

