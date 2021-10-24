import React, { useState } from 'react'
import './form.css'

import Text from './Text'
import Radio from './Radio'
import Select from './Select'
import Summary from './Summary'

const Form = () => {
  const [nameInput, setNameInput] = useState('')
  const [purpose, setPurpose] = useState('business')
  const [goal, setGoal] = useState('')
  const [step, setStep] = useState(1)

  const onNameInputChange = (event) => {
    setNameInput(event.target.value)
  }

  const onPurposeChange = (purpose) => {
    setPurpose(purpose)
  }

  const onGoalChange = (event) => {
    setGoal(event.target.value)
  }

  const onStepChange = () => {
    setStep(step + 1)
  } 

  const handleRestart = () => {
    setStep(1)
  }

  return (
    <>
    <div className="form-element-wrapper">
        <h1>A cool heading</h1>
        <p className="lead">Fields marked with * are required.</p>
    </div>
    <div className="form-element-wrapper">
        {step === 1 && (
        <Text
        nameInput={nameInput}
        onNameInputChange={onNameInputChange}
        onStepChange={onStepChange}
        />
        )}
        {step === 2 && (
        <Radio
        nameInput={nameInput}
        purpose={purpose}
        onPurposeChange={onPurposeChange}
        onStepChange={onStepChange}
        />
        )}
        {step === 3 && (
        <Select
        nameInput={nameInput}
        goal={goal}
        onGoalChange={onGoalChange}
        onStepChange={onStepChange}
        />
        )}
        {step === 4 && (
        <Summary
        nameInput={nameInput}
        goal={goal}
        purpose={purpose}
        handleRestart={handleRestart}
        />
        )}
    </div>
    </>
  )
}

export default Form