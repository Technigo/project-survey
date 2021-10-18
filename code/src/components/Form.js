import React, { useState } from "react"

import Name from './Name'
import QuantityPlants from "./QuantityPlants"
import Overview from "./Overview"
import Characteristics from "./Characteristics"
import Start from "./Start"
import Button from "./Button"

const Form = () => {
    const [nameInput, setNameInput] = useState('')
    const [quantity, setQuantity] = useState('')
    const [plantFeature, setPlantFeature] = useState('')
    const [step, setStep] = useState(0)

    const onSubmit = (event) => {
        event.preventDefault();
    }

    //custom functions to update the state properties
    const onNameInputChange = (event) => {
        setNameInput(event.target.value)
    }

    const onQuantityChange = (event) => {
        setQuantity(event.target.value)
    }
    const onPlantFeatureChange = (event) => {
        setPlantFeature(event.target.value)
    }
    const onStepChange = () => {
        setStep(step + 1)
    }
    return (
        <form className="form-container" onSubmit={onSubmit}>
            {step === 0 && (
                <>
                    <Start onStepChange={onStepChange} />
                    <Button button="Start" onStepChange={onStepChange} />
                </>
            )}
            {step === 1 && (
                <>
                    <Name
                        nameInput={nameInput}
                        onNameInputChange={onNameInputChange} />
                    <Button button="Continue" onStepChange={onStepChange}
                    />
                </>
            )}
            {step === 2 && (
                <>
                    <QuantityPlants
                        quantity={quantity}
                        onQuantityChange={onQuantityChange}
                    />
                    <Button button="Continue" onStepChange={onStepChange} />
                </>
            )}
            {step === 3 && (
                <>
                    <Characteristics
                        plantFeature={plantFeature}
                        onPlantFeatureChange={onPlantFeatureChange}
                        onStepChange={onStepChange}
                    />
                    <Button button="Submit" onStepChange={onStepChange} />
                </>
            )}
            {step === 4 && (
                <Overview
                    nameInput={nameInput}
                    quantity={quantity}
                    plantFeature={plantFeature}
                />
            )}
        </form>
    )
}

export default Form