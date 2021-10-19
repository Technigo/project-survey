import React, { useState } from 'react'

import IntroPage from './IntroPage'
import UserInfo from './UserInfo'
import QuestionOne from './QuestionOne'
import QuestionTwo from './QuestionTwo'
import QuestionThree from './QuestionThree'
import QuestionFour from './QuestionFour'
import Overview from './Overview'

const Form = () => {
    const [aliasInput, setAliasInput] = useState('')
    const [radioButtonInput, setRadioButtonInput] = useState('')
    const [questionOneInput, setQuestionOneInput] = useState('')
    const [questionTwoInput, setQuestionTwoInput] = useState('')
    const [questionThreeInput, setQuestionThreeInput] = useState('')
    const [questionFourInput, setQuestionFourInput] = useState('')
    const [step, setStep] = useState(1)

    const onAliasInputChange = (event) => {
        setAliasInput(event.target.value)
    }

    const onRadioButtonChange = (event) => {
        setRadioButtonInput(event.target.value)
    }

    const onQuestionOneInputChange = (event) => {
        setQuestionOneInput(event.target.value)
    }

    const onQuestionTwoInputChange = (event) => {
        setQuestionTwoInput(event.target.value)
    }

    const onQuestionThreeInputChange = (event) => {
        setQuestionThreeInput(event.target.value)
    }

    const onQuestionFourInputChange = (event) => {
        setQuestionFourInput(event.target.value)
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
                <UserInfo
                    aliasInput={aliasInput}
                    onAliasInputChange={onAliasInputChange}
                    radioButtonInput={radioButtonInput}
                    onRadioButtonChange={onRadioButtonChange}
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
                <QuestionFour
                    questionFourInput={questionFourInput}
                    onQuestionFourInputChange={onQuestionFourInputChange}
                    onStepChange={onStepChange}
                />
            )}
            {step === 7 && (
                <Overview
                    aliasInput={aliasInput}
                    radioButtonInput={radioButtonInput}
                    questionOneInput={questionOneInput}
                    questionTwoInput={questionTwoInput}
                    questionThreeInput={questionThreeInput}
                    questionFourInput={questionFourInput}
                />
            )}
        </div>
    )

}

export default Form