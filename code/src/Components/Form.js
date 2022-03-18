import React, { useState } from 'react'
import { StartingPage } from './StartingPage'
import { NameQuestion } from './NameQuestion'
import { EmailQuestion } from './EmailQuestion'
import { PositionQuestion } from './PositionQuestion'
import { OfficeQuestion } from './OfficeQuestion'
import { SkillsQuestion } from './SkillsQuestion'
import { ExperienceQuestion } from './ExperienceQuestion'
import { LinkQuestion } from './LinkQuestion'
import { Overview } from './Overview'
import { ThanksPage } from './ThanksPage'




const experienceLevelTitles = ['trainee developer', 'junior developer', 'mid-level developer', 'senior developer', 'team leader']

export const Form = () => {
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [positionInput, setPositionInput] = useState('')
  const [officeInput, setOfficeInput] = useState('')
  const [skillsArray, setSkillsArray] = useState([])
  const [experienceLevel, setExperienceLevel] = useState(2)
  const [experienceTitle, setExperienceTitle] = useState(experienceLevelTitles[experienceLevel])
  const [linkInput, setlinkInput] = useState('')
  const [step, setStep] = useState(0)


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
  const onSkillsArrayChange = (skill) =>{ 
    if(skillsArray.includes(skill)){
        const filteredSkillsArray = skillsArray.filter((item) =>{
            return item !== skill
        
    }) 
    setSkillsArray(filteredSkillsArray)
}
    else{
        setSkillsArray([...skillsArray, skill])
    }
}

  
  const onExperienceLevelChange = (event) =>{
    setExperienceLevel(event.target.value)
    setExperienceTitle(experienceLevelTitles[event.target.value])
  }
  
  const onLinkInputChange = (event) => {
    setlinkInput(event.target.value)
  }
  const onStepChange  = () => {
      setStep(step + 1)
  }

  const onStepBackChange  = () => {
    setStep(step - 1)
}

const onFormSubmit = (event) => {
  event.preventDefault()
  setStep(step + 1)
} 


  return (
      <form onSubmit={onFormSubmit}>
          {step === 0 && <StartingPage 
                            onStepChange={onStepChange}
                        />}
          {step === 1 && <NameQuestion 
                            nameInput={nameInput} 
                            onNameInputChange={onNameInputChange} 
                            onStepChange={onStepChange}
                        />}
          {step === 2 && <EmailQuestion 
                            emailInput={emailInput} 
                            onEmailInputChange={onEmailInputChange} 
                            onStepChange={onStepChange}
                            onStepBackChange={onStepBackChange}
                        />}
          {step === 3 && <PositionQuestion 
                            positionInput={positionInput}
                            onPositionInputChange={onPositionInputChange} 
                            onStepChange={onStepChange}
                            onStepBackChange={onStepBackChange}
                        />}
          {step === 4 && <OfficeQuestion 
                            officeInput={officeInput}
                            onOfficeInputChange={onOfficeInputChange} 
                            onStepChange={onStepChange}
                            onStepBackChange={onStepBackChange}
                        />}
          {step === 5 && <SkillsQuestion 
                            skillsArray={skillsArray}
                            onSkillsArrayChange={onSkillsArrayChange}
                            onStepChange={onStepChange}
                            onStepBackChange={onStepBackChange}
                        />}
          {step === 6 && <ExperienceQuestion 
                            experienceLevel={experienceLevel}
                            onExperienceLevelChange={onExperienceLevelChange}
                            experienceTitle = {experienceTitle}
                            onStepChange={onStepChange}
                            onStepBackChange={onStepBackChange}
                        />}
          {step === 7 && <LinkQuestion 
                            linkInput={linkInput}
                            onLinkInputChange={onLinkInputChange}
                            onStepChange={onStepChange}
                            onStepBackChange={onStepBackChange}
                        />}
          {step === 8 && <Overview 
                            nameInput={nameInput} 
                            emailInput={emailInput} 
                            positionInput={positionInput} 
                            officeInput={officeInput} 
                            skillsArray={skillsArray} 
                            linkInput={linkInput}
                            experienceTitle={experienceTitle}
                            onStepBackChange={onStepBackChange}
                        />}   
          {step === 9 && <ThanksPage
                        />}  
      </form>


  )
}




