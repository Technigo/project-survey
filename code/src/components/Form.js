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
    howImpressedByBonusFeature: '',
  }
}

const defaultQuestions = () => {
  return (
    [
      { 
        type: 'textInput',
        options: '',
        questionText: "Hey there! Thanks for checking out my survey project, I hope you will like it. Let's start with your name.",
        placeholder: 'Type your name',
        required: false,
        inputId: 'Name', 
      },
      { 
        type: 'radio',
        options: ['Yes', 'No'],
        questionText: "Thanks a lot for filling out your name. Or wait, maybe you just typed something silly? That is fine - completely normal behaviour. Did you write your actual name?",
        placeholder: '',
        required: true,
        inputId: 'isMyRealName', 
      },
      { 
        type: 'checkboxes',
        options: ['Founder of charitable yet lucrative startup on verge of massive success', 'Enigmatic CEO-type person in search of frontend devloper', 'Prestigeous tech recruiter', 'Code-reviewer', 'Technigo staff', "Random person", "Russian bot"],
        questionText: 'In what capacity are you visiting my survey today?',
        placeholder: 'Select your age',
        required: false,
        inputId: 'Capacity', 
      },
      { 
        type: 'select',
        options: ['Could be better', "There is something a bit off about it", 'It is ok', 'It is quirky and cute and i LOVE it', 'This survey is a work of staggering genius'],
        questionText: 'How are you liking this survey so far?',
        placeholder: 'Choose an answer',
        required: true,
        inputId: 'Rating', 
      },
      { 
        type: 'select',
        options: ['Wow, yes awesome job!', 'Sounds nice', 'I feel neutral about it', 'Sorry, no'],
        questionText: 'Ok. You know, this site can not only show this survey - it also allows you to create your own survey. Just click that grey button in the bottom right corner. See it? Are you impressed?',
        placeholder: 'Choose an answer',
        required: false,
        inputId: "howImpressedByBonusFeature", 
      
      },
      { 
        type: 'textInput',
        options: '',
        questionText: "Anything else you would like to add? Remember that whatever you write below will not be saved in any backend (even though I tried to hook up Netlify forms) - it will be permanently erased as soon as you click Submit in the next step. Consider this your imaginary friend and confidante whom you can tell anything and everything!",
        placeholder: 'Type profound thoughts here',
        required: true,
        inputId: 'profoundThought', 
      }

    ] 
  )
}

const Form = () => {
  const [values, setValues] = useState(defaultValues())
  const [step, setStep] = useState(1)
  const [formStatus, setFormStatus] = useState('question')
  const [formQuestions, setFormQuestions] = useState(defaultQuestions())

  const onInputResponse = (id, value, type) => {
    console.log(id, value)
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

  const onEnterResponse = (e) => {
    e.preventDefault()
    if (e.key === 'Enter') {
      console.log('onEnterResponse')
      if (step === formQuestions.length) {
        setFormStatus('summary')
      } else {
        setStep(step + 1)
      }

    }
  }
  
  const onButtonResponse = e => {
    console.log(e)
    switch (e) {

      case 'previous' :
        if (formStatus === 'summary') {
          setStep(step - 1)
          setFormStatus('question')
        } else {
          setStep(step - 1)
        }
        break

      case 'next' :
        if (step === formQuestions.length) {
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
        setFormQuestions(defaultQuestions())
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
          <div className="form" name="form">
            <Question 
              values={values}
              step={step}
              question={formQuestions[step - 1]}
              onInputResponse={onInputResponse}
              onButtonResponse={onButtonResponse}
              onEnterResponse={onEnterResponse}
            />
          </div>
          <Button 
            buttonValue="createNew"
            label="Create survey"
            onButtonResponse={(e) => onButtonResponse(e)} 
          />
        </>
      )
    case 'summary' :
      return (
        <Summary values={values} 
          onInputResponse={onInputResponse} 
          onButtonResponse={onButtonResponse} 
        />
      )
    case 'confirmation' :
      return (
        <Confirmation onButtonResponse={onButtonResponse} />
      )
    case 'createNew' :
      return (
        <CreateQuestions 
          setFormQuestions={setFormQuestions}
          setStep={setStep}
          setFormStatus={setFormStatus}
          setValues={setValues}
          defaultValues={defaultValues}
          defaultQuestions={defaultQuestions}
          values={values}
        />
      )
    default :
    return (
      <p>Error! Invalid formStatus</p>
    )
  }
}

export default Form