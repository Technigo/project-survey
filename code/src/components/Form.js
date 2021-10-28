import React, { useState } from 'react'

import Step1Player from './Step1Player'
import Step2SLJ from './Step2SLJ'
import Step3Fav from './Step3Fav'
import Overview from './Overview'

    const Form = () => {

    const [nameInput, setNameInput] = useState('')
    const [samuelInput, setSamuelInput] = useState('')
    const [favInput, setFavInput] = useState('')
    const [step, setStep] = useState(1)

    const onNameInputChange = (event) => {
        setNameInput(event.target.value)
    }

    const onSamuelInputChange = (event) => {
        setSamuelInput(event.target.value)
    }

    const onFavInputChange = (event) => {
        setFavInput(event.target.value)
    }

    const onStepChange = () => {
        setStep(step + 1)
    }

    return (
        <div className="form-wrapper">
            <div>
                <h1>React Movie Trivia</h1>
                <p>Welcome! Enjoy the little journey.
                </p>
            </div>
            {step === 1 && 
            <Step1Player
                nameInput={nameInput}
                onNameInputChange={onNameInputChange}
                onStepChange={onStepChange}
            />}
            {step === 2 &&
            <Step2SLJ
                samuelInput={samuelInput}
                onSamuelInputChange={onSamuelInputChange}
                onStepChange={onStepChange}
            />}
            {step === 3 &&
            <Step3Fav
                favInput={favInput}
                onFavInputChange={onFavInputChange}
                onStepChange={onStepChange}
            />}
            {step === 4 &&
            <Overview
                nameInput={nameInput}
                samuelInput={samuelInput}
                favInput={favInput}
            />}
        </div>
    )

}

export default Form