import React, { useState } from 'react'
import { FormWrapper } from 'components/FormWrapper'
import { Button } from 'components/Button'

import data from 'assets/data.json'

export const App = () => {
  const initialState = { nextQuestion: 0, questions: data.questions.length, answers: [] }

  const [state, setState] = useState(initialState)
  const [step, setStep] = useState(1)
  const [steps, setSteps] = useState([1])

  const handleChange = (e, nextQuestion, title, number, label) => {
    const { id, value } = e.target
    let newAnswers = [...state.answers]
    if (state.answers[number - 1]) {
      newAnswers[number - 1] = { ...newAnswers[number - 1], [id]: { value: value, label: label } }
    } else {
      newAnswers = [...newAnswers, { title: title, [id]: { value: value, label: label } }]
    }
    setState({
      ...state,
      [id]: value,
      answers: [...newAnswers],
      nextQuestion: nextQuestion,
    })
  }

  const incrementStep = () => {
    let newSteps = ''
    console.log(state.questions)
    if (step === state.questions) {
      newSteps = 'end'
    } else if (state.nextQuestion) {
      newSteps = state.nextQuestion
    } else {
      newSteps = step + 1
    }
    setStep(newSteps)
    setSteps([...steps, newSteps])
  }

  // const incrementStep = () => {
  //   if (state.nextQuestion) {
  //     setStep(state.nextQuestion)
  //     setSteps([...steps, state.nextQuestion])
  //   } else if (!state.nextQuestion) {
  //     setStep(step + 1)
  //     setSteps([...steps, step + 1])
  //   } else {
  //     setStep('end')
  //     setSteps([...steps, 'end'])
  //   }
  // }

  const decrementStep = () => {
    // console.log(steps.length)
    if (steps.length > 1) {
      const newSteps = steps.filter((e, i) => i < steps.length - 1)
      const newStep = newSteps[newSteps.length - 1]
      setStep(newStep)
      setSteps([...newSteps])
      setState({ ...state, nextQuestion: 0 })
    }
  }

  const handleRestart = () => {
    setStep(1)
    setState(initialState)
    setSteps([1])
  }

  return (
    <div className='container'>
      <FormWrapper step={step} state={state} handleChange={handleChange} />
      <Button disabled={step === 1} changeStep={decrementStep} text={'^'} />
      <Button disabled={step === 'end'} changeStep={incrementStep} text={'v'} />
      {step === 'end' && <Button incrementStep={handleRestart} text={'Reset'} />}
    </div>
  )
}

/*

add theme selection and pass theme object as props to child components, needs to be in wrapper component 

*/
