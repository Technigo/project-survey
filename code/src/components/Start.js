import React from 'react'
import SurveyButtons from './SurveyButtons'

const Start = (props) => {

  return (
    <>
      {props.step === 0 && (
        <>
          <h1 className="start-message">Hey! Please click the button below to start the survey! 😍</h1>
          <SurveyButtons  
            step={props.step} 
            setStep={props.setStep}
          />
        </>
      )}
    </>
  )
}
export default Start