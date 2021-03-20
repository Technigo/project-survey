import React, { useState } from 'react'

const optionsQuestionThree = ['< 20', '20-25', '25 <']

export const Input3 = ({temperature, setTemperature}) => {

  const onTemperatureChange =(event) => {
    setTemperature(event.target.value)
  }

   
  return (
    <div>
      <h3>
        Preferred temperature
      </h3>

      <div>
        {optionsQuestionThree.map((temperatureChoice) => {
          return (
            <div key={temperatureChoice}>
              <label>
                {temperatureChoice}
                  <input 
                    id={temperatureChoice} 
                    name='temperature'
                    type="radio"
                    value={temperatureChoice}
                    required
                    aria-label='select your preferred summer temperature'
                    onChange={(event) => {onTemperatureChange(event)}}
                    checked={temperature === temperatureChoice} // Går välja flera om jag tar bort denna
                  />
              </label>              
            </div>
          )
        })}
      </div>
    </div>
  )
}