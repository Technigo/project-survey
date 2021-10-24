import React from 'react'
import { Heading } from 'components/Heading'
import UpArrow from 'assets/icons/up-arrow.svg'
import 'components/submitSurvey.css'

export const SubmitSurvey = ({ setStep, decrementStep }) => {
  const handleSubmit = () => {
    setStep('end')
  }
  console.log('[submit component]')
  return (
    <>
      <Heading title={'Submit survey?'} />
      <div className='button-container-submit'>
        <button className='button-submit' onClick={decrementStep}>
          <img className='button-icon' src={UpArrow} alt='up-arrow' />
        </button>
        <button className='button-submit' onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  )
}
