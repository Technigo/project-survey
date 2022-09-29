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
  /* ThridQuestion States */
  const [bus, setBus] = useState(false);
  const [bike, setBike] = useState(false);
  const [walking, setWalking] = useState(false)

  const [greenCloset, setGreenCloset] = useState('');
  /* Counter for all questions */
  const [counter, setCounter] = useState(0)

  const handleWelcomeChange = (e) => {
    setWelcome(e.target.value)
  }

  const handleFirstChange = (e) => {
    setFirst(e.target.value)
  }

  const handleBusChange = () => {
    setBus(!bus)
  }

  const handleBikeChange = () => {
    setBike(!bike)
  }

  const handleWalkingChange = () => {
    setWalking(!walking)
  }

  const handleGreenCloset = (e) => {
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
        setBus={handleBusChange}
        setBike={handleBikeChange}
        setWalking={handleWalkingChange}
        bus={bus}
        bike={bike}
        walking={walking} />}
      {counter === 3
      && <ThridQuestion
        onThridQuestionChange={handleGreenCloset}
        nextQuestion={handleNextQuestion}
        closet={greenCloset} />}
      {counter === 4
      && <Summary
        nameWelcome={welcome}
        firstQuestion={first}
        bus={bus}
        bike={bike}
        walking={walking}
        closet={greenCloset} />}
    </section>
  )
};

export default Form;