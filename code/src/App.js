import React, { useState } from 'react'
import { FormWrapper } from 'components/FormWrapper'
import { Button } from 'components/Button'

export const App = () => {
  const initialState = { nextQuestion: 0 }

  const [state, setState] = useState(initialState)
  const [step, setStep] = useState(1)
  const [steps, setSteps] = useState([1])

  const handleChange = (e, nextQuestion) => {
    const { id, value } = e.target
    setState({ ...state, [id]: value, nextQuestion: nextQuestion })
  }

  const incrementStep = () => {
    let newSteps = ''
    if (state.nextQuestion) {
      newSteps = state.nextQuestion
    } else if (!state.nextQuestion) {
      newSteps = step + 1
    } else {
      newSteps = 'end'
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
    console.log(steps.length)
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
    <div>
      <FormWrapper step={step} state={state} handleChange={handleChange} />
      <Button disabled={step === 1} incrementStep={decrementStep} text={'^'} />
      <Button disabled={step === 'end'} incrementStep={incrementStep} text={'v'} />
      {step === 'end' && <Button incrementStep={handleRestart} text={'Restart'} />}
    </div>
  )
}

/*

add theme selection and pass theme object as props to child components, needs to be in wrapper component 

*/
