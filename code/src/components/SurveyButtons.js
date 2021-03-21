import React from 'react'
import Button from './Button'

const SurveyButtons = ({ step, setStep, name, animal, accessory, activity, ratherNot }) => {
  
  const previousStep = (event) => {
    event.preventDefault()
    setStep(step - 1)
  }

  const nextStep = (event) => {
    event.preventDefault()
    let check = true

    if (step === 0) {
      check = true
    } else if (name === '' && step === 1) {
      check = false
    } else if (animal === '' && step === 2) {
      check = false
    } else if (accessory === '' && step === 3) {
      check = false
    } else if (activity === '' && step === 4) {
      check = false
    } else if (ratherNot === '' && step === 5) {
      check = false
    } 

    check === true ? setStep(step + 1) : alert('Please enter a valid answer 💁') 
  }

  const restart = () => {
    window.location.reload();
  }

  return (
    <div className="buttons-div">
      {step === 0 && (
        <Button 
          className="btn start-btn" 
          step={nextStep} 
          btnText="Start 💃"
        />
      )}
      {step > 1 && step < 6 && (
        <Button 
          className="btn prev-btn"
          step={previousStep}
          btnText="Previous question"
        />
      )}
      {step > 0 && step < 5 && (
        <Button 
          className="btn next-btn"
          step={nextStep} 
          btnText="Next question"
        />
      )}
      {step === 5 && (
        <Button 
          className="btn next-btn"
          step={nextStep}
          btnText="See results"
        />
      )}
       {step === 6 && (
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