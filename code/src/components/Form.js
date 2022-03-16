import React, {useState} from 'react'
import {Introduction} from './IntroductionPage'
import {FirstQuestion} from './QuestionOne'
import {SecondQuestion} from './SecondQuestion'
import {ThirdQuestion} from './ThirdQuestion'
import {QuestionFour} from './QuestionFour'
import {SubmitSurvey} from './Submit'
import {Summary} from './Summary'


export const Form = () => {
    const [environmentInput, setenvironmentInput] = useState('')
    const [budgetInput, setbudgetInput] = useState('')
    const [dayInput, setdayInput] = useState('')
    const [travelInput, settravelInput] = useState('')
    const [step, setStep] = useState (0)
    
    const handleEnvironmentInputChange = (event) => {
        setenvironmentInput(event.target.value)
    }

    const handlebudgetInputChange = (event) => {
        setbudgetInput(event.target.value)
    }

    const handledayInputChange = (event) => {
        setdayInput(event.target.value)
    }

    const handletravelInputChange = (event) => {
        settravelInput(event.target.value)
    }

    const nextQuestion = (event) => {
        setStep(step +1)
        event.preventDefault()
    }

    const previousQuestion = (event) => {
        setStep(step -1)
        event.preventDefault()
    }
        
        if (step === 0) {
            return <Introduction nextQuestion={nextQuestion}/>

        } else if (step === 1) {
            return (
                <FirstQuestion
                environmentInput={environmentInput}
                onEnvironmentInputChange={handleEnvironmentInputChange}
                nextQuestion={nextQuestion}
                previousQuestion={previousQuestion}
                step = {step}
                />
            )
        } else if (step === 2) {
            return (
                <SecondQuestion
                budgetInput={budgetInput}
                onbudgetInputChange={handlebudgetInputChange}
                nextQuestion={nextQuestion}
                previousQuestion={previousQuestion}
                step={step}
                />
            )
        } else if (step === 3) {
            return (
                <ThirdQuestion
                dayInput= {dayInput}
                ondayInputChange={handledayInputChange}
                nextQuestion={nextQuestion}
                previousQuestion={previousQuestion}
                step={step}
                />

            )
        } else if (step === 4) {
            return (
                <QuestionFour
                travelInput= {travelInput}
                ontravelInputChange={handletravelInputChange}
                nextQuestion={nextQuestion}
                previousQuestion={previousQuestion}
                step={step}
                />

            )
        
        }else if (step === 5) {
            return (
                <SubmitSurvey 
                nextQuestion={nextQuestion} 
                previousQuestion={previousQuestion}
                />
            )
        } else if (step === 6){
        return (
            <Summary
            environmentInput={environmentInput}
            budgetInput={budgetInput}
            dayInput={dayInput}
            travelInput={travelInput}
            />
        
        )
    }
    }         
          