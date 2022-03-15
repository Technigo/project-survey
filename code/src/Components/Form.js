import React, { useState } from 'react'
import { FirstQuestion } from './FirstQuestion'
import { SecondQuestion } from './SecondQuestion'
import { ThirdQuestion} from './ThirdQuestion'
import { ForthQuestion } from './ForthQuestion'
import { Overview } from './Overview'

export const Form = () => {
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [positionInput, setPositionInput] = useState('')
  const [officeInput, setOfficeInput] = useState('')
  const [skillInput, setSkillInput] = useState()
  const [step, setStep] = useState(1)


  const onNameInputChange = (event) => {
    setNameInput(event.target.value)
  }
  const onEmailInputChange = (event) =>{
    setEmailInput(event.target.value)
  }
  const onPositionInputChange = (event) =>{
    setPositionInput(event.target.value)
  }
  const onOfficeInputChange = (event) =>{
    setOfficeInput(event.target.value)
  }
  const onSkillInputChange = (event) =>{
    setSkillInput(event.target.value)
  }
  const onStepChange  = () => {
      setStep(step + 1)
  }

  const onStepBackChange  = () => {
    setStep(step - 1)
}
//example of the form submit thing
  // const handleSubmit = (event) => {
  //   event.prevenDefault()
  //   if(feeling === '' || today === '') return
  //   setShowResult(true)
  // }

  return (
      //onSubmit={handleSubmit} inside of form tag
      <form>
          {step === 1 && <FirstQuestion 
                            nameInput={nameInput} 
                            onNameInputChange={onNameInputChange} 
                            emailInput={emailInput} 
                            onEmailInputChange={onEmailInputChange} 
                            onStepChange={onStepChange}
                        />}
          {step === 2 && <SecondQuestion 
                            positionInput={positionInput}
                            onPositionInputChange={onPositionInputChange} 
                            onStepChange={onStepChange}
                            onStepBackChange={onStepBackChange}
                        />}
          {step === 3 && <ThirdQuestion 
                            officeInput={officeInput}
                            onOfficeInputChange={onOfficeInputChange} 
                            onStepChange={onStepChange}
                            onStepBackChange={onStepBackChange}
                        />}
          {step === 4 && <ForthQuestion 
                            skillInput={skillInput}
                            onSkillInputChange={onSkillInputChange} 
                            onStepChange={onStepChange}
                            onStepBackChange={onStepBackChange}
                        />}
          {step === 5 && <Overview 
                            nameInput={nameInput} 
                            emailInput={emailInput} 
                            positionInput={positionInput} 
                            officeInput={officeInput} 
                            skillInput={skillInput} 
                        />}
      </form>
  )
}




