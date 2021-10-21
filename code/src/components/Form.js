import React, { useState } from 'react'
// import emailjs from 'emailjs'

import FirstQuestion from './FirstQuestion'
import PreferenceQuestion from './PreferenceQuestion'
import EmailQuestion from './EmailQuestion'
import Final from './Final'

const Form = () => {
  const [nameInput, setNameInput] = useState('')
  const [preferenceInput, setPreferenceInput] = useState(false)
  const [clothingInput, setClothingInput] = useState(true)
  const [travelInput, setTravelInput] = useState(false)
  const [eventsInput, setEventsInput] = useState(false)

  const [emailInput, setEmailInput] = useState('')
  const [step, setStep] = useState(1)

  const onNameInputChange = (event) => {
    setNameInput(event.target.value)
  }

  const onPreferenceInputChange = (event) => {
    setPreferenceInput(event.target.checked)
  }
  const onClothingInputChange = (event) => {
    setClothingInput(event.target.checked)
  }
  const onTravelInputChange = (event) => {
    setTravelInput(event.target.checked)
  }
  const onEventsInputChange = (event) => {
    setEventsInput(event.target.checked)
  }

  const onEmailInputChange = (event) => {
    setEmailInput(event.target.value)
  }

  const onStepChange = () => {
    setStep(step + 1)
  }

  //need one for email here inside of the enter key.
  const onEnter = (event) => {
    if (event.key === 'Enter' && event.target.value !== '') {
      event.preventDefault()
      setStep(step + 1)
    }
  }
  // function sendEmail(e) {
  //   e.preventDefault()

  //   emailjs
  //     .sendForm(
  //       'service_8yjsskq',
  //       'template_vkmyufs',
  //       Form,
  //       'user_CLE2dCfZbNVh3CenFnpxS'
  //     )
  //     .then((res) => {
  //       console.log(res)
  //     })
  //     .catch((err) => console.log(err))
  // }

  return (
    <div className="form-container">
      {step === 1 && (
        <FirstQuestion
          nameInput={nameInput}
          onNameInputChange={onNameInputChange}
          onStepChange={onStepChange}
          onEnter={onEnter}
        />
      )}
      {step === 2 && (
        <PreferenceQuestion
          preference={preferenceInput}
          onPreferenceInputChange={onPreferenceInputChange}
          clothing={clothingInput}
          onClothingInputChange={onClothingInputChange}
          travelInput={travelInput}
          onTravelInputChange={onTravelInputChange}
          eventsinput={eventsInput}
          onEventsInputChange={onEventsInputChange}
          onStepChange={onStepChange}
          onEnter={onEnter}
        />
      )}
      {step === 3 && (
        <EmailQuestion
          emailInput={emailInput}
          onEmailInputChange={onEmailInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 4 && (
        <Final
          nameInput={nameInput}
          emailInput={emailInput}
          preferenceInput={preferenceInput}
          clothingInput={clothingInput}
          travelInput={travelInput}
          eventsInput={eventsInput}
          onEnter={onEnter}
          // onClick={sendEmail}
        />
      )}
    </div>
  )
}

export default Form
