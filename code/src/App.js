import React, { useState } from 'react'
import { FormWrapper } from 'components/FormWrapper'
import { Button } from 'components/Button'

export const App = () => {
  const [step, setStep] = useState(1)
  const incrementStep = () => {
    step <= 3 ? setStep(step + 1) : setStep('end')
  }

  return (
    <div>
      <FormWrapper step={step} />
      <Button step={step} incrementStep={incrementStep} />
    </div>
  )
}
//

/*

create json data with array of questions (3 questions to start)

data should have:
data 
  type: 'type of question, multi select, free text, radio, select option, etc (the type of input / component to generate)'
  question title: 'start ng of the question'
  options: 'different options if this i available'
  more data that is needed to decide the child questions if there are any
  question number? needed for the state to be able to select question to display, can i use the array index?
  Unique key? generated from somewhere 
  array with child questions, with same data needs as "parent" questions? or how to structure a way to skip questions based on answer?

start simple with array of 3 questions

components to build
- a wrapper component for the questions
    - in this map over the questions array to display all questions
    - maybe hav separate function to do the map/filter to the question to display
- component for each question type
- title component for the whole survey
- results component to display all the answers 

extra:
- component to set theme state


try to display only one question at at a Time, a "next question" button needed + state to track question to be generated 

add theme selection and pass theme object as props to child components, needs to be in wrapper component 
*/
