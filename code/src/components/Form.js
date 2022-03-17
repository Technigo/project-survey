import React, { useState } from 'react'

import Name from './Name'
import Location from './Location'
import Travel from './Travel'
import Summary from './Summary'

const Form = () => {
const [name, setName] = useState('')
const [city, setCity] = useState('')
const [travelWay, settravelWay] = useState('')
const [isSummaryDisplayed, setIsSummaryDisplayed] = useState(false)
const [step, setStep] = useState(1)


const handleNameChange = (event) => { 
    setName(event.target.value)
  }

const handleCityChange = (event) => {
    setCity(event.target.value)
 }

 const handletravelWayChange = (event) => {
    settravelWay(event.target.value)
}

const onStepChange = () => {
     setStep(step + 1)
   }

const onBackstepChange = () => {
    setStep(step - 1)
  }

       
return (
    <section>
        {step === 1 && (
        <Name 
        name={name} 
        onNameChange={handleNameChange} 
        onStepChange={onStepChange}
        />
        )}
        {step === 2 && (
        <Location 
        city={city} 
        onCityChange={handleCityChange}
        onStepChange={onStepChange}
        onBackstepChange={onBackstepChange}
        />
        )}
        {step === 3 && (
        <Travel 
        travelWay={travelWay} 
        ontravelWayChange={handletravelWayChange}
        onStepChange={onStepChange}
        onBackstepChange={onBackstepChange}
        />  
        )}
         {step === 4 && (
        <Summary 
          name={name} 
          city={city}
          travelWay={travelWay}
        />
      )}
    </section>
)
}  

    export default Form
    
 