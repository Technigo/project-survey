import React, { useState} from 'react'
import NameQuestion from './NameQuestion'
import LocationQuestion from './LocationQuestion'
import Overview from './Overview'


 const Form = () => {
  const [nameInput, setNameInput] = useState ('');
  const [locationInput, setLocationInput] = useState ('')
  const [step, setStep] = useState (1)
  
  
  {/* creates a function to changed name input, considered a good approach to create a new function to do this*/}
  
  const onNameInputChange = (event) =>{
    setNameInput(event.target.value)
  }
  const onLocationInputChange = (event) =>{
    setLocationInput(event.target.value)
  }
  const onstepChange = () => {
      setStep(step+1)
  }

  if (step === 1) {
    return (
      <div> < NameQuestion 
      nameInput={nameInput} 
      onNameInputChange={onNameInputChange}
      onstepChange = {onstepChange}/></div> 
    )
  } else if (step === 2) {
    return (
      <div> <LocationQuestion 
      locationInput={locationInput} 
      onLocationInputChange={onLocationInputChange}
      onstepChange = {onstepChange}/> </div>
    )
    
  } else if (step === 3) {
    return (
      <div> <Overview 
      nameInput={nameInput}
      locationInput={locationInput}/></div>
    )
  }
}

export default Form