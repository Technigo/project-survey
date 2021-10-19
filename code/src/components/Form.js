import React, { useState } from "react"

import NameText from './NameText'
import QuantitySelect from "./QuantitySelect"
import Overview from "./Overview"
import CharacteristicsRadio from "./CharacteristicsRadio"
import Start from "./Start"

const Form = () => {
    const [nameInput, setNameInput] = useState('')
    const [quantity, setQuantity] = useState('')
    const [plantFeature, setPlantFeature] = useState('')
    const [step, setStep] = useState(0)

    const onSubmit = (event) => {
        event.preventDefault();
        setStep(step + 1)
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

    return (
        <form className="form-container" onSubmit={onSubmit}>
            {step === 0 && (
                <Start />
            )}
            {step === 1 && (
                <NameText
                    nameInput={nameInput}
                    onNameInputChange={onNameInputChange} />
            )
            }
            {
                step === 2 && (
                    <QuantitySelect
                        quantity={quantity}
                        onQuantityChange={onQuantityChange}
                    />
                )
            }
            {
                step === 3 && (
                    <CharacteristicsRadio
                        plantFeature={plantFeature}
                        onPlantFeatureChange={onPlantFeatureChange}
                    />
                )
            }
            {
                step === 4 && (
                    <Overview
                        nameInput={nameInput}
                        quantity={quantity}
                        plantFeature={plantFeature}
                    />
                )
            }
        </form >
    )
}

export default Form