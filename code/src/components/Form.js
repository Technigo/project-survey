/* eslint-disable no-undef */
import React, { useState } from 'react';
import WelcomeToTheSurvey from './WelcomeToTheSurvey';
import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';

const Form = () => {
  const [welcome, setWelcome] = useState('')
  const [first, setFirst] = useState('')
  const [counter, setCounter] = useState(0)

  const handleWelcomeChange = (e) => {
    setWelcome(e.target.value)
  }

  const handleFirstChange = (e) => {
    setFirst(e.target.value)
  }

  const handleSecondChange = (e) => {
    setIsChecked(e.target.value)
  }

  const handleNextQuestion = () => {
    setCounter(counter + 1)
  }

  return (
    <section className="form-wrapper">
      {counter === 0
      && <WelcomeToTheSurvey
        onWelcomeChange={handleWelcomeChange}
        nextQuestion={handleNextQuestion}
        userName={welcome} />}
      {counter === 1
      && <FirstQuestion
        onFirstQuestionChange={handleFirstChange}
        nextQuestion={handleNextQuestion}
        firstQuestion={first} />}
      {counter === 2
      && <SecondQuestion
        nextQuestion={handleNextQuestion}
        secondQuestion={handleSecondChange} />}
    </section>
  )
};

export default Form;