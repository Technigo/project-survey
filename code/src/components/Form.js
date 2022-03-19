import React, { useState } from 'react'

import Name from './Name'
import Location from './Location'
import Travel from './Travel'
import Living from './Living'
import Eating from './Eating'
import Summary from './Summary'
import Thanks from './Thanks'

const Form = () => {
const [name, setName] = useState('')
const [city, setCity] = useState('')
const [travelWay, settravelWay] = useState('')
const [rooms, setRooms] = useState('')
const [food, setFood] = useState('')
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

 const handleroomsChange = (event) => {
   setRooms(event.target.value)
 }

 const handlefoodChange = (event) => {
  setFood(event.target.value)
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
        <Living 
        rooms={rooms} 
        onroomsChange={handleroomsChange}
        onStepChange={onStepChange}
        onBackstepChange={onBackstepChange}
        />  
        )}
        {step === 5 && (
        <Eating 
        food={food} 
        onfoodChange={handlefoodChange}
        onStepChange={onStepChange}
        onBackstepChange={onBackstepChange}
        />  
        )}
         {step === 6 && (
        <Summary 
          name={name} 
          city={city}
          travelWay={travelWay}
          rooms={rooms}
          food={food}
          onStepChange={onStepChange}
          onBackstepChange={onBackstepChange}
        />
      )}
       {step === 7 && (
        <Thanks 
          name={name} 
          city={city}
          travelWay={travelWay}
          rooms={rooms}
          food={food}
          onStepChange={onStepChange}
          onBackstepChange={onBackstepChange}
        />
        )}
    </section>
)
}  

    export default Form
    
 