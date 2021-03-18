import React, { useState } from 'react'

import Question from './Question'
import Summary from './Summary'
import Confirmation from './Confirmation'

const defaultValues = () => {
  return {
    step: 1,
    formStatus: 'question',
    name: '',
    company: '',
    age: ''
  }
}

const Form = () => {
  const [values, setValues] = useState(defaultValues())
  
  const defaultQuestions = [
    { 
      type: 'textInput',
      options: '',
      questionText: 'What is your name and bla bla bla it can get lengthy',
      placeholder: 'Type your full name',
      required: true,
      inputId: 'name', 
    },
    { 
      type: 'textInput',
      options: '',
      questionText: 'Company',
      placeholder: 'Type your company',
      required: true,
      inputId: 'company', 
    },
    { 
      type: 'select',
      options: ['0-10', '11-50', '51-100'],
      questionText: 'Age',
      placeholder: 'Select your age',
      required: true,
      inputId: 'age', 
    },
    ]
    

  const onInputResponse = (e) => {
    console.log('onInputResponse received ' + e.target.value + ' from ' + e.target.id)
    setValues({ ...values, [e.target.id]: e.target.value})
  }
  
  const onButtonResponse = e => {
    console.log(values)
    console.log('e.target.value ' + e.target.value)
    console.log('e.target.id ' + e.target.id)
    
    switch (e.target.id) {

      case 'previous' :
        if (values.formStatus === 'summary') {
          console.log(values)
          setValues({ ...values, "step": (values.step - 1), "formStatus": 'question'})
          // setValues({ ...values, "formStatus": 'question'})
        } else {
          setValues({ ...values, "step": (values.step - 1)})
        }
        break

      case 'next' :
        if (values.step === defaultQuestions.length) {
          console.log('setting formStatus to summary')
          setValues({ ...values, "formStatus": "summary"})
        }
        else {
          setValues({ ...values, "step": (values.step + 1)})
        }
        break

      case 'submit' :
        setValues({ ...values, "formStatus": "confirmation"})
        break

      case 'reset' :
        setValues(defaultValues())
        break

      default :
      return null
    }
  }

  switch (values.formStatus) {
    case 'question' :
      return (
        <Question 
        values={values}
        question={defaultQuestions[values.step - 1]}
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