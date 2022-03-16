import React, { useState } from 'react'
import Intro from './Intro'
import FirstQuestion from './FirstQuestion'


const Form = () => {


// Declaring all the pretty variables here
const [nameInput, setNameInput] = useState('')

const [step, setStep] = useState(0)

// This function calls new question
const onStepChange = () => {
    setStep(step + 1)
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
    onStepChange={onStepChange} />
    )}

{/* <FirstQuestion 
    nameInput={nameInput}
    onNameInputChange={onNameInputChange}
    setNameInput={setNameInput}
/> */}

</form>

)}

export default Form