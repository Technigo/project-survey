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
    genderChoice: '',
    electricityChoices: [],
    ageChoice: ''
  }

  const [formState, setFormState] = useState(initialForm)

  /* Question counter */
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
      genderChoice: e.target.value
    })
  }

  const handleSecondQuestion = (electricityChoices) => {
    setFormState({
      ...formState,
      electricityChoices
    })
  }

  const handleThridQuestion = (ageChoice) => {
    setFormState({
      ...formState,
      ageChoice
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
          formState={formState} />}
    </section>
  )
};

export default Form;