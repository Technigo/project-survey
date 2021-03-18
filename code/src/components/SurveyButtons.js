import React from 'react'
import Button from './Button'

const SurveyButtons = (props) => {

  const previousStep = (event) => {
    event.preventDefault()
    props.setStep(props.step - 1)
  }

  const nextStep = (event) => {
    event.preventDefault()
    props.setStep(props.step + 1)
  }

  const restart = () => {
    window.location.reload();
  }

  return (
    <div className="buttons-div">
      {props.step === 0 && (
        <Button 
          className="btn start-btn" 
          step={nextStep} 
          btnText="Start 💃" 
        />
      )}
      {props.step > 1 && props.step < 6 && (
        <Button 
          className="btn prev-btn"
          step={previousStep}
          btnText="Previous question"
        />
      )}
      {props.step > 0 && props.step < 5 && (
        <Button 
          className="btn next-btn"
          step={nextStep} 
          btnText="Next question"
        />
      )}
      {props.step === 5 && (
        <Button 
          className="btn next-btn"
          step={nextStep}
          btnText="See results"
        />
      )}
       {props.step === 6 && (
        <Button
          className="btn start-btn"
          step={restart}
          btnText="Restart"
        />
      )}
    </div>
  )
}

export default SurveyButtons