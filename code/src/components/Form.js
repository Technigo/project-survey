import React, { useState } from 'react'
import { SecondQuestion } from './SecondQuestion'
import { FirstQuestion } from './FirstQuestion'
import { ThirdQuestion } from './ThirdQuestion'
import { FourthQuestion } from './FourthQuestion'
import { SubmitButton } from './SubmitButton'
import { Overview } from './Overview'
import { Suggestion } from './Suggestion'

//All states for the different user inputs
export const Form = () => {
  const [nameInput, setNameInput] = useState('')
  const [moodInput, setMoodInput] = useState('')
  const [socialInput, setSocialInput] = useState('')
  const [viewInput, setviewInput] = useState('')
  const [step, setStep] = useState(1)

  const onNameInputChange = (event) => {
    setNameInput(event.target.value)
  }

  const onMoodInputChange = (event) => {
    setMoodInput(event.target.value)
  }

  const onSocialInputChange = (event) => {
    setSocialInput(event.target.value)
  }

  const onViewInputChange = (event) => {
    setviewInput(event.target.value)
  }

  const onStepChange = () => {
    setStep(step + 1)
  }

  const onPrevQuestionChange = () => {
    setStep(step - 1)
  }

  const startOver = () => {
    setStep(step - 5)
  }

  //Decides what component should be displayed when clicking the next question button
  return (
    <form>
      {step === 1 && (
        <FirstQuestion
          nameInput={nameInput}
          onNameInputChange={onNameInputChange}
          onStepChange={onStepChange}
        />
      )}

      {step === 2 && (
        <SecondQuestion
          moodInput={moodInput}
          onMoodInputChange={onMoodInputChange}
          onPrevQuestionChange={onPrevQuestionChange}
          onStepChange={onStepChange}
        />
      )}

      {step === 3 && (
        <ThirdQuestion
          socialInput={socialInput}
          onSocialInputChange={onSocialInputChange}
          onPrevQuestionChange={onPrevQuestionChange}
          onStepChange={onStepChange}
        />
      )}

      {step === 4 && (
        <FourthQuestion
          viewInput={viewInput}
          onViewInputChange={onViewInputChange}
          onPrevQuestionChange={onPrevQuestionChange}
          onStepChange={onStepChange}
        />
      )}

      {step === 5 && (
        <SubmitButton
          onStepChange={onStepChange}
          onPrevQuestionChange={onPrevQuestionChange}
        />
      )}

      {step === 6 && (
        <div className='survey-info'>
          <Overview
            nameInput={nameInput}
            moodInput={moodInput}
            socialInput={socialInput}
            viewInput={viewInput}
            onStepChange={onStepChange}
            startOver={startOver}
          />
          <Suggestion
            moodInput={moodInput}
            socialInput={socialInput}
            viewInput={viewInput}
          />
        </div>
      )}
    </form>
  )
}
