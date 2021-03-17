import React, { useState } from 'react'

// Do I need a separate mapping for radio options & radio labels?

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
        {optionsQuestionThree.map((temperature) => {
          return (
            <div key={temperature}>
              <label>
                {temperature}
                  <input 
                    id={temperature} 
                    type="radio"
                    value={temperature}
                    onChange={(event) => {onTemperatureChange(event)}}
                    // checked={temperature === temperature} // Går välja flera om jag tar bort denna
                  />
              </label>              
            </div>
          )
        })}
      </div>
    </div>
  )
}