import React, { useState } from 'react'
import Intro from './Intro'
import QuestionOne from './QuestionOne'
import QuestionTwo from './QuestionTwo'

const Form = () => {

    const [nameInput, setNameInput] = useState('')

    const handleNameInputChange = (event) => {setNameInput(event.target.value)}
    const [step, setStep] = useState(0)

    const onStepChange = () => {
        setStep(step + 1)
    }

return (
<>
    {step === 0 && ( 
    <Intro onStepChange={onStepChange}/>)}
    {step === 1 && (    
    <QuestionOne
        nameInput={nameInput}
        onNameInputChange={handleNameInputChange} 
        onStepChange={onStepChange}
        />)}


</>

)
}
export default Form