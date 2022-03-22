import React, { useState } from "react";

import NameQuestion from "./NameQuestion";
import SkinTypeQuestion from "./SkinTypeQuestion";
import AgeGroupQuestion from "./AgeGroupQuestion";
import Summary from "./Summary";

const Form = () => {

    const [nameInput, setNameInput] = useState('');
    const [skinTypeInput, setSkinTypeInput] = useState('');
    const [ageGroupInput, setAgeGroupInput] = useState('');
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

    const restartSteps = () => {
        setStep(1)
    }

    const handleSubmit = (event) => {event.preventDefault()}


    return (
        
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
                    previousStep={previousStep}
                />}
                {step === 3 && <AgeGroupQuestion
                    ageGroupInput={ageGroupInput}
                    onAgeGroupInputChange={onAgeGroupInputChange}
                    nextStep={nextStep}
                    previousStep={previousStep}
                />}
                   {step === 4 && <Summary
                    nameInput={nameInput}
                    skinTypeInput={skinTypeInput}
                    ageGroupInput={ageGroupInput}
                    restartSteps={restartSteps}
                />}
            </form>
        


    )
}


export default Form