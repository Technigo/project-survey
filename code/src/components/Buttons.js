import React from 'react'

const Buttons = (props) => {

  const previousStep = (event) => {
    event.preventDefault()
    props.setStep(props.step - 1)
  }

  const nextStep = (event) => {
    event.preventDefault()
    props.setStep(props.step + 1)
  }

  let btnText
  
  if (props.step === 3) {
    btnText = 'View results >>'
  } else {
    btnText = 'Next question >>'
  }

  return (
    <>
      {props.step < 4 && (
        <button className="btn next-btn" onClick={nextStep}>{btnText}</button>
      )}

      {(props.step > 1, props.step < 4) && (
        <button className="btn prev-btn" onClick={previousStep}>{'<< Previous question'}</button>
      )}

    </>
  )
}
export default Buttons
