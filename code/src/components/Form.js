import React, { useState } from 'react'

import IntroPage from './IntroPage'
import RadioButtons from './RadioButtons'
import QuestionOne from './QuestionOne'
import QuestionTwo from './QuestionTwo'
import QuestionThree from './QuestionThree'
import Overview from './Overview'

const Form = () => {
    const [questionOneInput, setQuestionOneInput] = useState('')
    const [questionTwoInput, setQuestionTwoInput] = useState('')
    const [questionThreeInput, setQuestionThreeInput] = useState('')
    const [step, setStep] = useState(1)

    const onQuestionOneInputChange = (event) => {
        setQuestionOneInput(event.target.value)
    }

    const onQuestionTwoInputChange = (event) => {
        setQuestionTwoInput(event.target.value)
    }

    const onQuestionThreeInputChange = (event) => {
        setQuestionThreeInput(event.target.value)
    }

    const onStepChange = () => {
        setStep(step + 1)
    }

    return (
        <div>
            {step === 1 && (
                <IntroPage
                    onStepChange={onStepChange}
                />
            )}
            {step === 2 && (
                <RadioButtons
                    questionOneInput={questionOneInput}
                    onQuestionOneInputChange={onQuestionOneInputChange}
                    onStepChange={onStepChange}
                />
            )}
            {step === 3 && (
                <QuestionOne
                    questionOneInput={questionOneInput}
                    onQuestionOneInputChange={onQuestionOneInputChange}
                    onStepChange={onStepChange}
                />
            )}
            {step === 4 && (
                <QuestionTwo
                    questionTwoInput={questionTwoInput}
                    onQuestionTwoInputChange={onQuestionTwoInputChange}
                    onStepChange={onStepChange}
                />
            )}
            {step === 5 && (
                <QuestionThree
                    questionThreeInput={questionThreeInput}
                    onQuestionThreeInputChange={onQuestionThreeInputChange}
                    onStepChange={onStepChange}
                />
            )}
            {step === 6 && (
                <Overview
                    questionOneInput={questionOneInput}
                    questionTwoInput={questionTwoInput}
                    questionThreeInput={questionThreeInput}
                />
            )}
        </div>
    )

}

export default Form