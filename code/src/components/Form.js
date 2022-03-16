import React, {useState} from 'react'
import {Introduction} from './IntroductionPage'
import {FirstQuestion} from './QuestionOne'
import {SecondQuestion} from './SecondQuestion'
import {ThirdQuestion} from './ThirdQuestion'


export const Form = () => {
    const [environmentInput, setenvironmentInput] = useState('')
    const [budgetInput, setbudgetInput] = useState('')
    const [dayInput, setdayInput] = useState('')
    const [step, setStep] = useState (0)
    
    const onEnvironmentInputChange = (event) => {
        setenvironmentInput(event.target.value)
    }

    const onbudgetInputChange = (event) => {
        setbudgetInput(event.target.value)
    }

    const ondayInputChange = (event) => {
        setdayInput(event.target.value)
    }

    const nextQuestion = (event) => {
        setStep(step +1)
        event.preventDefault()
    }
        
        if (step === 0) {
            return <Introduction nextQuestion={nextQuestion}/>

        } else if (step === 1) {
            return (
                <FirstQuestion
                environmentInput={environmentInput}
                onEnvironmentInputChange={onEnvironmentInputChange}
                nextQuestion={nextQuestion}
                step = {step}
                />
            )
        } else if (step === 2) {
            return (
                <SecondQuestion
                budgetInput={budgetInput}
                onbugetInputChange={onbudgetInputChange}
                nextQuestion={nextQuestion}
                step={step}
                />
            )
        } else if (step === 3) {
            return (
                <ThirdQuestion
                dayInput= {dayInput}
                ondayInputChange={ondayInputChange}
                nextQuestion={nextQuestion}
                step={step}
                />

            )
        }
    }         
          