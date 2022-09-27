/* eslint-disable no-undef */
import React, { useState } from 'react';
import WelcomeToTheSurvey from './WelcomeToTheSurvey';
import FirstQuestion from './FirstQuestion';

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
    </section>
  )
};

export default Form;