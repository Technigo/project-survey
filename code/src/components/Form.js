import React, { useState } from 'react'

import Name from './Name'
import Location from './Location'
import Travel from './Travel'
import Summary from './Summary'

const Form = () => {
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [travelWay, settravelWay] = useState('')
    const [step, setStep] = useState(1)


const onNameChange = (event) => { 
    setName(event.target.value)
  }

const onCityChange = (city) => {
    setCity(city)
  }

const ontravelWayChange = (howtravel) => {
    settravelWay(howtravel)
  }

const onStepChange = () => {
    setStep(step + 1)
  }

  return (
    <div className='wrapper'>
      {step === 1 && (
        <Name   
          name={name}
          onNameChange={onNameChange}
          onStepChange={onStepChange} 
        />
      )}
      {step === 2 && (
        <Location
          city={city}
          onCityChange={onCityChange}
          onStepChange={onStepChange} 
        />
      )}
      {step === 3 && (
        <Travel
          travelWay={travelWay}
          ontravelWayChange={ontravelWayChange}
          onStepChange={onStepChange} 
        />
      )}
      {step === 4 && (
        <Summary 
          name={name} 
          city={city}
          travelWay={travelWay}
        />
      )}
    </div>

  )
}

export default Form

