import React, { useState } from 'react'
import { StartSurvey } from 'components/StartSurvey'
import { FormWrapper } from 'components/FormWrapper'
import { FormSummary } from 'components/FormSummary'
import { ProgressBar } from 'components/ProgressBar'

import data from 'assets/data.json'

export const App = () => {
  const initialState = { nextQuestion: 0, questions: data.questions.length, answers: [] }

  const [state, setState] = useState(initialState)
  const [step, setStep] = useState(0)
  const [steps, setSteps] = useState([0])
  const [colorTheme, setColorTheme] = useState('blue')

  const handleChange = (e, nextQuestion, title, number, label, questionId, validated) => {
    const { id, value } = e.target
    if (title.includes('color')) setColorTheme(value.toLowerCase())

    // building answers array
    let newAnswers = [...state.answers]
    if (state.answers[number - 1]) {
      newAnswers[number - 1] = { ...newAnswers[number - 1], [id]: { value: value, label: label } }
    } else {
      newAnswers = [...newAnswers, { title: title, [id]: { value: value, label: label } }]
    }

    setState({
      ...state,
      [questionId]: validated,
      [id]: value,
      answers: [...newAnswers],
      nextQuestion: nextQuestion,
    })
  }

  const incrementStep = () => {
    let newSteps = ''
    if (step === state.questions) {
      newSteps = 'submit'
    } else if (state.nextQuestion) {
      newSteps = state.nextQuestion
    } else {
      newSteps = step + 1
    }
    setStep(newSteps)
    setSteps([...steps, newSteps])
  }

  const decrementStep = () => {
    if (steps.length > 1) {
      const newSteps = steps.filter((e, i) => i < steps.length - 1)
      const newStep = newSteps[newSteps.length - 1]
      setStep(newStep)
      setSteps([...newSteps])
      setState({ ...state, nextQuestion: 0 })
    }
  }

  const handleRestart = () => {
    setStep(0)
    setState(initialState)
    setSteps([0])
  }

  return (
    <div className={colorTheme} style={{ height: '100vh' }}>
      {(step > 0 || step === 'submit') && <ProgressBar state={state} steps={steps} />}
      <div className={'container'}>
        {step === 0 && <StartSurvey incrementStep={incrementStep} />}
        {(step > 0 || step === 'submit') && (
          <FormWrapper
            step={step}
            setStep={setStep}
            state={state}
            handleChange={handleChange}
            incrementStep={incrementStep}
            decrementStep={decrementStep}
            handleRestart={handleRestart}
          />
        )}
        {step === 'end' && (
          <FormSummary
            state={state}
            decrementStep={decrementStep}
            handleRestart={handleRestart}
            step={step}
          />
        )}
      </div>
    </div>
  )
}
