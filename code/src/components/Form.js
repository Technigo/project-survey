import React, { useState } from 'react'
import Intro from './Intro'
import FirstQuestion from './FirstQuestion'


const Form = () => {


// Declaring all the pretty variables here
const [nameInput, setNameInput] = useState('')

const [step, setStep] = useState(0)

// These functions calls new question or goes back
const onStepChange = () => {
    setStep(step + 1)
}

const onStepBack = () => {
    setStep(step - 1)
}


const onNameInputChange = (event) => {
    setNameInput(event.target.value)
}

return (
  
<form className="form-wrapper">


    {step === 0 && <Intro onStepChange={onStepChange} />}
    
    {step === 1 && (
    <FirstQuestion 
    nameInput={nameInput} 
    onNameInputChange={onNameInputChange} 
    onStepChange={onStepChange}
    onStepBack={onStepBack} />
    )}

</form>

)}

export default Form