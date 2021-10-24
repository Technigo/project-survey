import React from 'react'
import 'components/formWrapper.css'
import { SubmitSurvey } from 'components/SubmitSurvey'
import { QuestionWrapper } from 'components/questions/QuestionWrapper'

export const FormWrapper = ({
  step,
  setStep,
  state,
  handleChange,
  incrementStep,
  decrementStep,
  handleRestart,
}) => {
  return (
    <form className='form'>
      {step !== 'submit' && (
        <QuestionWrapper
          step={step}
          setStep={setStep}
          state={state}
          handleChange={handleChange}
          incrementStep={incrementStep}
          decrementStep={decrementStep}
          handleRestart={handleRestart}
        />
      )}
      {step === 'submit' && (
        <SubmitSurvey
          step={step}
          setStep={setStep}
          decrementStep={decrementStep}
          handleRestart={handleRestart}
        />
      )}
    </form>
  )
}
