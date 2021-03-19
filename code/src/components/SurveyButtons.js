import React from 'react'
import Button from './Button'

const SurveyButtons = (props) => {
  
  const previousStep = (event) => {
    event.preventDefault()
    props.setStep(props.step - 1)
  }

/*const addClass = () => {
    props.setRequired(props.required = 'required')
  }*/

  const nextStep = (event) => {
    
    let check = true

    event.preventDefault()
    if (props.step === 0) {
      check = true
    } else if (props.name === '' && props.step === 1) {
      check = false
    } else if (props.animal === '' && props.step === 2) {
      check = false
    } else if (props.accessory === '' && props.step === 3) {
      check = false
    } else if (props.activity === '' && props.step === 4) {
      check = false
    } else if (props.ratherNot === '' && props.step === 5) {
      check = false
    } 

    check === true ? props.setStep(props.step + 1) : /*addClass()*/ alert('Please enter a valid answer 💁')
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