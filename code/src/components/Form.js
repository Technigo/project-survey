import React, { useState } from "react"

import NameText from './NameText'
import QuantitySelect from "./QuantitySelect"
import Overview from "./Overview"
import CharacteristicsRadio from "./CharacteristicsRadio"
import Start from "./Start"
import CareQualityRange from "./CareQualityRange"
import QuestionProgress from "./QuestionProgress"
import RatingStars from "./RatingStars"

const Form = () => {
    const [nameInput, setNameInput] = useState('')
    const [quantity, setQuantity] = useState('')
    const [plantFeature, setPlantFeature] = useState('')
    const [step, setStep] = useState(0)
    const [careQuality, setCareQuality] = useState(3)
    const [percent, setPercent] = useState(0)
    const [gradeIndex, setGradeIndex] = useState(0);

    const questionsAmount = 5


    const onSubmit = (event) => {
        event.preventDefault()
        setStep(step + 1)
        setPercent(percent + 20)
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

    const OnCareQualityChange = (event) => {
        setCareQuality(event.target.value)
    }

    const OnGradeIndexChange = (index) => {
        setGradeIndex(index);
    }
    return (
        <form className="form-container" onSubmit={onSubmit}>
            <QuestionProgress
                percent={percent}
                step={step}
                questionsAmount={questionsAmount} />
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
                    <CareQualityRange
                        careQuality={careQuality}
                        OnCareQualityChange={OnCareQualityChange}
                    />
                )
            }
            {
                step === 5 && (
                    <RatingStars OnGradeIndexChange={OnGradeIndexChange} gradeIndex={gradeIndex} />
                )
            }
            {
                step === 6 && (
                    <Overview
                        nameInput={nameInput}
                        quantity={quantity}
                        plantFeature={plantFeature}
                        careQuality={careQuality}
                        gradeIndex={gradeIndex}
                    />
                )
            }
        </form >
    )
}

export default Form