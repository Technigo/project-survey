import React, { useState } from 'react'

import Intro from './Intro'
import Question1 from './Question1'
import Extra1 from './Extra1'
import Question2 from './Question2'
import Question3 from './Question3'
import Question4 from './Question4'
import Extra2 from './Extra2'
import Question5 from './Question5'
import Overview from './Overview'

/* ===== STATES ===== */

const Survey = () => {
    const [favoriteInput, setFavoriteInput] = useState('')
    const [locationInput, setLocationInput] = useState('')
    const [djInput, setDjInput] = useState('')
    const [festivalInput, setFestivalInput] = useState('')
    const [vibesInput, setVibesInput] = useState('23')

    const [step, setStep] = useState(1)

    const onFavoriteInputChange = (event) => {
        setFavoriteInput(event.target.value)
    }

    const onLocationInputChange = (locationInput) => {
        setLocationInput(locationInput)
    }

    const onDjInputChange = (event) => {
        setDjInput(event.target.value)
    }

    const onFestivalInputChange = (festivalInput) => {
        setFestivalInput(festivalInput)
    }

    const onVibesInputChange = (event) => {
        setVibesInput(event.target.value)
    }

    const onStepChange = () => {
        setStep(step + 1)
    }

    return (
        <div>
           {step === 1 && (
               <Intro
               onStepChange={onStepChange}
               />
           )}
           {step === 2 && (
               <Question1
               favoriteInput={favoriteInput}
               onFavoriteInputChange={onFavoriteInputChange}
               onStepChange={onStepChange}
               />
           )}
           {step === 3 && (
               <Extra1
               onStepChange={onStepChange}
               />
           )}
            {step === 4 && (
               <Question2
               locationInput={locationInput}
               onLocationInputChange={onLocationInputChange}
               onStepChange={onStepChange}
               />
           )}
            {step === 5 && (
               <Question3
               djInput={djInput}
               onDjInputChange={onDjInputChange}
               onStepChange={onStepChange}
               />
           )}
            {step === 6 && (
               <Question4
               festivalInput={festivalInput}
               onFestivalInputChange={onFestivalInputChange}
               onStepChange={onStepChange}
               />
           )}
           {step === 7 && (
               <Extra2
               onStepChange={onStepChange}
               />
           )}
            {step === 8 && (
               <Question5
                vibesInput={vibesInput}
                onVibesInputChange={onVibesInputChange}
                onStepChange={onStepChange}
               />
           )}
            {step === 9 && (
               <Overview
                favoriteInput={favoriteInput}
                locationInput={locationInput}
                djInput={djInput}
                festivalInput={festivalInput}
                vibesInput={vibesInput}
                />
           )}

        </div>
    )
}

export default Survey