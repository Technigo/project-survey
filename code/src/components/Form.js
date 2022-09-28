/* eslint-disable no-undef */
import React, { useState } from 'react';
import WelcomeToTheSurvey from './WelcomeToTheSurvey';
import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import ThridQuestion from './ThridQuestion';
import Summary from './Summary';

const Form = () => {
  const [welcome, setWelcome] = useState('')
  const [first, setFirst] = useState('')
  const [greenCloset, setGreenCloset] = useState('');
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

  const handleThridChange = (e) => {
    setGreenCloset(e.target.value)
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
        nameWelcome={welcome} />}
      {counter === 1
      && <FirstQuestion
        onFirstQuestionChange={handleFirstChange}
        nextQuestion={handleNextQuestion}
        firstQuestion={first} />}
      {counter === 2
      && <SecondQuestion
        nextQuestion={handleNextQuestion}
        secondQuestion={handleSecondChange} />}
      {counter === 3
      && <ThridQuestion
        onThridQuestionChange={handleThridChange}
        nextQuestion={handleNextQuestion}
        ThridQuestion={greenCloset} />}
      {counter === 4
      && <Summary
        nameWelcome={welcome}
        firstQuestion={first}
        secondQuestion={handleSecondChange}
        ThridQuestion={greenCloset} />}
    </section>
  )
};

export default Form;