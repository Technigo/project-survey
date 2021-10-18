import React, { useState } from 'react'

import FirstQuestion from './FirstQuestion'
import SecondQuestion from './SecondQuestion'
import ThirdQuestion from './ThirdQuestion'
import FourthQuestion from './FourthQuestion'
import FifthQuestion from './FifthQuestion'
import Overview from './Overview'

const Form = () => {
    const [nameInput, setNameInput] = useState('')
    const [surnameInput, setSurnameInput] = useState('')
    const [ageInput, setAgeInput] = useState('')
    const [favoriteInput, setFavoriteInput] = useState('')
    const [ratingInput, setRatingInput] = useState('')
    const [step, setStep] = useState(1)

    const onNameInputChange = (event) => {
        setNameInput(event.target.value)
    }
    const onSurnameInputChange = (event) => {
        setSurnameInput(event.target.value)
    }
    const onAgeInputChange = (event) => {
        setAgeInput(event.target.value)
    }
    const onFavoriteInputChange = (event) => {
        setFavoriteInput(event.target.value)
    }
    const onRatingInputChange = (event) => {
        setRatingInput(event.target.value)
    }
    const onStepChange = () => {
        setStep(step +1)
    }

    return (
        <div>
            {step === 1 && (
                <FirstQuestion
                    nameInput={nameInput}
                    onNameInputChange={onNameInputChange}
                    onStepChange={onStepChange}
                />
            )}
            {step === 2 && (
                <SecondQuestion
                    surnameInput={surnameInput}
                    onSurnameInputChange={onSurnameInputChange}
                    onStepChange={onStepChange}
                />
            )}
            {step === 3 && (
                <ThirdQuestion
                    ageInput={ageInput}
                    onAgeInputChange={onAgeInputChange}
                    onStepChange={onStepChange}
                />
            )}
            {step === 4 && (
                <FourthQuestion
                    favoriteInput={favoriteInput}
                    onFavoriteInputChange={onFavoriteInputChange}
                    onStepChange={onStepChange}
                />
            )}
            {step === 5 && (
                <FifthQuestion
                    ratingInput={ratingInput}
                    onRatingInputChange={onRatingInputChange}
                    onStepChange={onStepChange}
                />
            )}
            {step === 6 && (
                <Overview
                    nameInput={nameInput}
                    surnameInput={surnameInput}
                    ageInput={ageInput}
                    favoriteInput={favoriteInput}
                    ratingInput={ratingInput}
                />
            )}
        </div>
    )
}

export default Form