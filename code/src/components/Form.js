import React, {useState} from "react"
import { SecondQuestion } from "./SecondQuestion"
import { FirstQuestion } from "./FirstQuestion"
import { ThirdQuestion } from "./ThirdQuestion"
import { FourthQuestion } from "./FourthQuestion"
import { SubmitButton } from "./SubmitButton"
import { Overview } from "./Overview"
import { Suggestion } from "./Suggestion"

export const Form = () => {
    const [nameInput, setNameInput] = useState('')
    const [moodInput, setMoodInput] = useState('')
    const [socialInput, setSocialInput] = useState('')
    const [viewInput, setviewInput] = useState('')
    const [step, setStep] = useState(1)

    const onNameInputChange = (event) => {
		setNameInput(event.target.value)
	}

    const onMoodInputChange = (event) => {
		setMoodInput(event.target.value)
	}

    const onSocialInputChange = (event) => {
		setSocialInput(event.target.value)
	}

    const onViewInputChange = (event) => {
		setviewInput(event.target.value)
	}

    const onStepChange = () => {
		setStep(step + 1)
	}


    return (
        <form>
            {step === 1 && (
                <FirstQuestion
                nameInput={nameInput}
                onNameInputChange={onNameInputChange}
                onStepChange={onStepChange}
                />
            )}

            {step === 2 && (
                <SecondQuestion
                moodInput={moodInput}
                onMoodInputChange={onMoodInputChange}
                onStepChange={onStepChange}
                />
            )}  

            {step === 3 && (
                <ThirdQuestion
                socialInput={socialInput}
                onSocialInputChange={onSocialInputChange}
                onStepChange={onStepChange}
                />
            )}  

            {step === 4 && (
                <FourthQuestion
                viewInput={viewInput}
                onViewInputChange={onViewInputChange}
                onStepChange={onStepChange}
                />
            )} 

            {step === 5 && (
                <SubmitButton
                onStepChange={onStepChange}
                />
            )}

            {step === 6 && (
                <>
                <Overview
                nameInput={nameInput}
                moodInput={moodInput}
                socialInput={socialInput}
                viewInput={viewInput}
                onStepChange={onStepChange}
                />
                <Suggestion
                moodInput={moodInput}
                socialInput={socialInput}
                viewInput={viewInput}
                />
                </>
            )}
        </form>
    )
}