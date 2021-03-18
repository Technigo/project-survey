import React from 'react'
import Buttons from './Buttons'

const Start = (props) => {

  return (
    <>
      {props.step === 0 && (
        <>
          <h1 className="start-message">Hey! Please click the button below to start the survey! 😍</h1>
          <Buttons 
          className="btn start-btn" 
          step={props.nextStep} 
          btnText="Start 💃" />
        </>
      )}
    </>
  )
}
export default Start