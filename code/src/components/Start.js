import React from 'react'
import SurveyButtons from './SurveyButtons'

const Start = ({ step, setStep }) => {

  return (
    <>
      <h1 className="start-message">Hey! Please click the button below to start the survey! <span role="img" aria-label="heart-eyes">😍</span></h1>
      <SurveyButtons  
        step={step} 
        setStep={setStep}
      />
    </>
  )
}
export default Start