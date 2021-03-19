import React, { useState } from 'react'

import Question from './Question'
import Summary from './Summary'
import Confirmation from './Confirmation'

const defaultValues = () => {
  return {
    // step: 1,
    // formStatus: 'question',
    name: '',
    company: '',
    age: '',
    preference: '',
    fishSize: '',
  }
}

const Form = () => {
  const [values, setValues] = useState(defaultValues())
  const [step, setStep] = useState(1)
  const [formStatus, setFormStatus] = useState('question')
  
  const defaultQuestions = [
    { 
      type: 'textInput',
      options: '',
      questionText: 'Hej Lisa hur känns det här då?',
      placeholder: 'Här kan det stå lite text',
      required: true,
      inputId: 'name', 
    },
    { 
      type: 'textInput',
      options: '',
      questionText: 'What company do you work for?',
      placeholder: 'Type your company',
      required: true,
      inputId: 'company', 
    },
    { 
      type: 'checkboxes',
      options: ['0-10', '11-50', '51-100'],
      questionText: 'Age',
      placeholder: 'Select your age',
      required: true,
      inputId: 'age', 
    },
    { 
      type: 'textInput',
      options: '',
      questionText: 'What fish do you prefer?',
      placeholder: 'Type your fish preference',
      required: true,
      inputId: 'preference', 
    },
    { 
      type: 'select',
      options: ['small', 'meduim', 'large', 'x-large'],
      questionText: 'What size do you want the fish to be? Remember that the fins are included in the overall size and some more text to really make it wrap, i hope.',
      placeholder: 'Choose size',
      required: true,
      inputId: 'fishSize', 
    }
    ]
    

  const onInputResponse = (e) => {
    console.log('onInputResponse received ' + e.target.value + ' from ' + e.target.id)
    setValues({ ...values, [e.target.id]: e.target.value})
  }
  
  const onButtonResponse = e => {
    console.log(e)
    console.log('e.target.value ' + e.target.value)
    console.log('e.target.id ' + e.target.id)
    
    switch (e.target.id) {

      case 'previous' :
        if (formStatus === 'summary') {
          console.log(values)
          setStep(step - 1)
          setFormStatus('question')
          // setValues({ ...values, "step": (step - 1), "formStatus": 'question'})
          // setValues({ ...values, "formStatus": 'question'})
        } else {
          // setValues({ ...values, "step": (values.step - 1)})
          setStep(step - 1)

        }
        break

      case 'next' :
        if (step === defaultQuestions.length) {
          console.log('setting formStatus to summary')
          // setValues({ ...values, "formStatus": "summary"})
          setFormStatus('summary')

        }
        else {
          // setValues({ ...values, "step": (values.step + 1)})
          setStep(step + 1)

        }
        break

      case 'submit' :
        // setValues({ ...values, "formStatus": "confirmation"})
        setFormStatus('confirmation')

        break

      case 'reset' :
        setValues(defaultValues())
        setStep(1)
        setFormStatus('question')

        
        break

      default :
      return null
    }
  }

  switch (formStatus) {
    case 'question' :
      return (
        <Question 
        values={values}
        step={step}
        question={defaultQuestions[step - 1]}
        onInputResponse={onInputResponse}
        onButtonResponse={onButtonResponse}
        />
      )
    case 'summary' :
      return (
        <Summary values={values} 
        onInputResponse={onInputResponse} 
        onButtonResponse={onButtonResponse} />
      )
    case 'confirmation' :
      return (
        <Confirmation onButtonResponse={onButtonResponse} />
      )
    default :
    return (
      <p>Oops!</p>
    )

  }
}

export default Form