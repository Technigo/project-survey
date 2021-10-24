import React from 'react'
import { Heading } from 'components/Heading'
import { Button } from 'components/Button'

export const SubmitSurvey = ({ step, setStep, decrementStep, handleRestart }) => {
  const handleSubmit = () => {
    setStep('end')
  }
  console.log('[submit component]')
  return (
    <>
      <Heading title={'Submit survey?'} />
      <div className='label'>
        <button className='button-start' onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div className='button-container'>
        {step === 'end' && <Button text={''} type={'up'} onClick={decrementStep} />}
        {step === 'end' && <Button text={'Reset'} onClick={handleRestart} />}
      </div>
    </>
  )
}
