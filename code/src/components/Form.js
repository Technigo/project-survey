/* eslint-disable import/order */
/* eslint-disable function-paren-newline */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable max-len */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable indent */
// eslint-disable-next-line quotes
import React, { useState } from 'react';

import Intro from './Intro';
import QuestionOne from './QuestionOne';
import QuestionTwo from './QuestionTwo';
import QuestionThree from './QuestionThree';
import QuestionFour from './QuestionFour';
import QuestionFive from './QuestionFive';
import QuestionSix from './QuestionSix';
import QuestionSeven from './QuestionSeven';
import QuestionEight from './QuestionEight';
import Summary from './Summary';

const Form = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [activeMood, setActiveMood] = useState('');
  const [adjective, setAdjective] = useState('');
  const [activeAnimal, setActiveAnimal] = useState('');
  const [exclamation, setExclamation] = useState('');
  const [adjectiveSecond, setAdjectiveSecond] = useState('');
  const [creature, setCreature] = useState('');
  const [food, setFood] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (!event.target.value && step !== 1) {
    //   alert('välj nåt');
    // }
    setStep(step + 1);
  };
  const handleNameChange = (event) => {
    // console.log(event.target.value);
    setName(event.target.value);
  };
  const handleMoodChange = (event) => {
    // console.log(event.target.value);
    setActiveMood(event.target.value);
  };
  const handleAdjectiveChange = (event) => {
    // console.log(event.target.value);
    setAdjective(event.target.value);
  };
  const handleAnimalChange = (event) => {
    setActiveAnimal(event.target.value);
  };
  const handleExclamationChange = (event) => {
    // console.log(event.target.value);
    setExclamation(event.target.value);
  };
  const handleAdjectiveSecondChange = (event) => {
    // console.log(event.target.value);
    setAdjectiveSecond(event.target.value);
  };
  const handleCreatureChange = (event) => {
    // console.log(event.target.value);
    setCreature(event.target.value);
  };
  const handleFoodChange = (event) => {
    // console.log(event.target.value);
    setFood(event.target.value);
  };

  return (
    <div>
      {step === 1 && <Intro handleSubmit={handleSubmit} />}
      {step === 2 && (
        <QuestionOne
          handleSubmit={handleSubmit}
          name={name}
          handleNameChange={handleNameChange}
        />
      )}
      {step === 3 && (
        <QuestionTwo
          handleSubmit={handleSubmit}
          activeMood={activeMood}
          handleMoodChange={handleMoodChange}
        />
      )}
      {step === 4 && (
        <QuestionThree
          handleSubmit={handleSubmit}
          adjective={adjective}
          handleAdjectiveChange={handleAdjectiveChange}
        />
      )}
      {step === 5 && (
        <QuestionFour
          handleSubmit={handleSubmit}
          adjectiveSecond={adjectiveSecond}
          handleAdjectiveSecondChange={handleAdjectiveSecondChange}
        />
      )}
      {step === 6 && (
        <QuestionFive
          handleSubmit={handleSubmit}
          exclamation={exclamation}
          handleExclamationChange={handleExclamationChange}
        />
      )}
      {step === 7 && (
        <QuestionSix
          handleSubmit={handleSubmit}
          activeAnimal={activeAnimal}
          handleAnimalChange={handleAnimalChange}
        />
      )}
      {step === 8 && (
        <QuestionSeven
          handleSubmit={handleSubmit}
          creature={creature}
          handleCreatureChange={handleCreatureChange}
        />
      )}
      {step === 9 && (
        <QuestionEight
          handleSubmit={handleSubmit}
          food={food}
          handleFoodChange={handleFoodChange}
        />
      )}
      {step === 10 && (
        <Summary
          name={name}
          mood={activeMood}
          adjective={adjective}
          animal={activeAnimal}
          exclamation={exclamation}
          adjectiveSecond={adjectiveSecond}
          creature={creature}
          food={food}
        />
      )}
    </div>
  );
};

export default Form;
