import React, { useState } from "react";
import AgeGroupQuestion from "./AgeGroupQuestion";

import NameQuestion from "./NameQuestion";
import SkinTypeQuestion from "./SkinTypeQuestion";

const Form = () => {

    const [nameInput, setNameInput] = useState('');
    const [skinTypeInput, setSkinTypeInput] = useState('');
    const [ageGroupInput, setAgeGroupInput] = useState('');
    const [isResultDisplayed, setIsResultDisplayed] = useState(false);
    const [step, setStep] = useState(1)

    const onNameInputChange = (event) => {
        setNameInput(event.target.value);
    };

    const onSkinTypeInputChange = (event) => {
        setSkinTypeInput(event.target.value);
    };

    const onAgeGroupInputChange = (event) => {
        setAgeGroupInput(event.target.value);
    };

    const nextStep = () => {
        setStep(step + 1)
    }

    const previousStep = () => {
        setStep(step - 1)
    }

    const handleSubmit = (event) => {event.preventDefault()}


    return (
        <div>
            <form onSubmit={handleSubmit}>
                {step === 1 && <NameQuestion
                    nameInput={nameInput}
                    onNameInputChange={onNameInputChange}
                    nextStep={nextStep}
                />}
                {step === 2 && <SkinTypeQuestion
                    skinTypeInput={skinTypeInput}
                    onSkinTypeInputChange={onSkinTypeInputChange}
                    nextStep={nextStep}
                />}
                {step === 3 && <AgeGroupQuestion
                    ageGroupInput={ageGroupInput}
                    onAgeGroupInputChange={onAgeGroupInputChange}
                    nextStep={nextStep}
                />}
            </form>
        </div>


    )
}


export default Form