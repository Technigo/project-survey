import React, { useState } from 'react'
import Intro from './Intro'
import QuestionOne from './QuestionOne'
import QuestionTwo from './QuestionTwo'
import QuestionThree from './QuestionThree'
import QuestionFour from './QuestionFour'
import Conclusion from './Conclusion'

function Form() {

    const [nameInput, setNameInput] = useState('')
    const [step, setStep] = useState(0)
    const [selectOption, setSelectOption] = useState('')
    const [radioInput, setRadioInput] = useState('')
    const [radioInput2, setRadioInput2] = useState('')

    const handleNameInputChange = (event) => { setNameInput(event.target.value) }
    const handleSelectOptionChange = (event) => { setSelectOption(event.target.value) }
    const handleRadioInputChange = (event) => { setRadioInput(event.target.value) }
    const handleRadioInputChange2 = (event) => { setRadioInput2(event.target.value) }
    const onStepChange = () => {
        setStep(step + 1)
    }

    const onStepBackChange = () => {
        setStep(step - 1)
    }

    return (
        <>
            {step === 0 && (
                <Intro onStepChange={onStepChange} />)}
            {step === 1 && (
                <QuestionOne
                    nameInput={nameInput}
                    handleNameInputChange={handleNameInputChange}
                    onStepChange={onStepChange}
                    onStepBackChange={onStepBackChange} />)}

            {step === 2 && (
                <QuestionTwo
                    selectOption={selectOption}
                    nameInput={nameInput}
                    handleSelectOptionChange={handleSelectOptionChange}
                    onStepChange={onStepChange}
                    onStepBackChange={onStepBackChange} />
            )}

            {step === 3 && (
                <QuestionThree
                    radioInput={radioInput}
                    handleRadioInputChange={handleRadioInputChange}
                    onStepChange={onStepChange}
                    onStepBackChange={onStepBackChange} />
            )}

            {step === 4 && (
                <QuestionFour
                    radioInput2={radioInput2}
                    handleRadioInputChange2={handleRadioInputChange2}
                    onStepChange={onStepChange}
                    onStepBackChange={onStepBackChange} />
            )}

            {step === 5 && (
                <Conclusion
                    nameInput={nameInput}
                    selectOption={selectOption}
                    radioInput={radioInput}
                    radioInput2={radioInput2}
                    onStepBackChange={onStepBackChange} />
            )}

        </>
    )
}
export default Form