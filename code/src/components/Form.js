/* eslint-disable no-undef */
import React, { useState } from 'react';
import WelcomeToTheSurvey from './WelcomeToTheSurvey';
import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import ThridQuestion from './ThridQuestion';
import Summary from './Summary';

const Form = () => {
  const initialForm = {
    name: '',
    meatFrequency: '',
    transportChoices: [],
    storesChoice: ''
  }

  const [formState, setFormState] = useState(initialForm) // valor inicial.

  /* Counter for all questions */
  const [counter, setCounter] = useState(0)

  const handleWelcomeChange = (e) => {
    setFormState({
      ...formState,
      name: e.target.value
    })
  }

  const handleFirstQuestion = (e) => {
    setFormState({
      ...formState,
      meatFrequency: e.target.value
    })
  }

  const handleSecondQuestion = (transportChoices) => {
    setFormState({
      ...formState,
      transportChoices
    })
  }

  const handleThridQuestion = (storesChoice) => {
    setFormState({
      ...formState,
      storesChoice
    })
  }

  const handleNextQuestion = () => {
    setCounter(counter + 1)
  }

  return (
    <section className="form-wrapper">
      {counter === 0
        && <WelcomeToTheSurvey
          onWelcomeChange={handleWelcomeChange}
          nextQuestion={handleNextQuestion} />}
      {counter === 1
        && <FirstQuestion
          onFirstQuestionChange={handleFirstQuestion}
          nextQuestion={handleNextQuestion} />}
      {counter === 2
        && <SecondQuestion
          nextQuestion={handleNextQuestion}
          onSecondQuestionChange={handleSecondQuestion} />}
      {counter === 3
        && <ThridQuestion
          onThridQuestionChange={handleThridQuestion}
          nextQuestion={handleNextQuestion} />}
      {counter === 4
        && <Summary
            formState={formState}
           />}
    </section>
  )
};

export default Form;