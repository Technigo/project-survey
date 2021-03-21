import React, { useState } from 'react'

import Question from './Question'
import Summary from './Summary'
import Confirmation from './Confirmation'
import CreateQuestions from './CreateQuestions'
import Button from './Button'

const defaultValues = () => {
  return {
    Name: '',
    isMyRealName: '',
    Capacity: '',
    Rating: '',
    howImpressedByUnfinishedFeature: '',
  }
}

const defaultQuestions = () => {
  return (
    [
      { 
        type: 'textInput',
        options: '',
        questionText: "Hey there! Thanks for checking out my survey project! I hope you will like it, I'm pretty pleased with it myself. Now that you are here - please fill out your name.",
        placeholder: 'Type your name',
        required: true,
        inputId: 'Name', 
      },
      { 
        type: 'radio',
        options: ['Yes', 'No'],
        questionText: "Thanks a lot for filling out your name. Or wait, maybe you just typed something silly? That is fine - I do that all the time. Or did you actually write your name?",
        placeholder: '',
        required: true,
        inputId: 'isMyRealName', 
      },
      { 
        type: 'checkboxes',
        options: ['Prestigeous tech recruiter', 'Enigmatic CEO-type person', 'Code-reviewer', 'Technigo staff', "Random person", "Russian bot"],
        questionText: 'In what capacity are you visiting this survey right now?',
        placeholder: 'Select your age',
        required: true,
        inputId: 'Capacity', 
      },
      { 
        type: 'select',
        options: ['Could be better', "There is something a bit off about it", 'It is ok', 'This survey is a work of staggering genius'],
        questionText: 'How are you liking this survey so far?',
        placeholder: 'Choose an answer',
        required: true,
        inputId: 'Rating', 
      },
      { 
        type: 'select',
        options: ['Awesome job!', 'Sounds nice', "A for effort but 'nära skjuter ingen hare'", 'Sorry, no'],
        questionText: 'If i told you that i ALMOST (like 90%!) managed to code this site in a way so that you can also create your own set of questions - would you be impressed?',
        placeholder: 'Choose an answer',
        required: true,
        inputId: "howImpressedByUnfinishedFeature", 
      
      }
    ] 
  )
}

const Form = () => {
  const [values, setValues] = useState(defaultValues())
  const [step, setStep] = useState(1)
  const [formStatus, setFormStatus] = useState('question')
  const [formQuestions, setFormQuestions] = useState(defaultQuestions())
  // const [userValues, setUserValues] = useState([])
  // const [userQuestions, setUserQuestions] = useState({})
  // const [userCreateStep, setUserCreateStep] = useState(1)

  


  const onInputResponse = (id, value, type) => {
    console.log('onInputResponse received ' + value + ' from ' + id + ' of type ' + type)
    if (type === 'checkbox') {
      const index = values[id].indexOf(value) 
      if (index === -1) {
        setValues({ ...values, [id]: [...values[id], value]})
      } else {
        const newArr = values[id]
        newArr.splice(index, 1)
        setValues({ ...values, [id]: newArr})
      }
    } else {
      setValues({ ...values, [id]: value})
    }
  }
  
  const onButtonResponse = e => {
    console.log('onButtonResponse received ' + e.target.id)
    
    switch (e.target.id) {

      case 'previous' :
        if (formStatus === 'summary') {
          console.log(values)
          setStep(step - 1)
          setFormStatus('question')
        } else {
          setStep(step - 1)
        }
        break

      case 'next' :
        if (step === formQuestions.length) {
          console.log('setting formStatus to summary')
          setFormStatus('summary')
        } else {
          setStep(step + 1)
        }
        break

      case 'submit' :
        setFormStatus('confirmation')
        break

      case 'reset' :
        setValues(defaultValues())
        setStep(1)
        setFormStatus('question')
        break

      case 'createNew' :
        setFormStatus('createNew')
        break  
      default :
      return null
    }
  }

  switch (formStatus) {
    case 'question' :
      return ( 
        <>
          <form name="form" method="POST" data-netlify="true">
          <Question 
          values={values}
          step={step}
          question={formQuestions[step - 1]}
          onInputResponse={onInputResponse}
          onButtonResponse={onButtonResponse}
          />
          </form>
          {/* <Button 
              buttonValue="createNew"
              label="Create new"
              onButtonResponse={(e) => onButtonResponse(e)} /> */}
        </>
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
    // case 'createNew' :
    //   return (
    //     <CreateQuestions 
    //     setFormQuestions={setFormQuestions}
    //     setFormStatus={setFormStatus}
    //     setValues={setValues}
    //     values={values}
    //     />
    //   )
    default :
    console.log(formStatus)
    console.log(step)
    console.log(JSON.stringify(values, null, 2))
    return (
      <p>Oops!</p>
    )

  }
  
}

export default Form