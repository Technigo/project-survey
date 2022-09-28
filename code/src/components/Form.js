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
  const [mood, setMood] = useState('');
  const [adjective, setAdjective] = useState('');
  const [animal, setAnimal] = useState('');
  const [exclamation, setExclamation] = useState('');
  const [adjectiveSecond, setAdjectiveSecond] = useState('');
  const [creature, setCreature] = useState('');
  const [food, setFood] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!event.target.value && step !== 1) {
      alert('välj nåt');
    }
    setStep(step + 1);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleMoodChange = (event) => {
    setMood(event.target.value);
  };
  const handleAdjectiveChange = (event) => {
    setAdjective(event.target.value);
  };
  const handleAnimalChange = (event) => {
    setAnimal(event.target.value);
  };
  const handleExclamationChange = (event) => {
    setExclamation(event.target.value);
  };
  const handleAdjectiveSecondChange = (event) => {
    setAdjectiveSecond(event.target.value);
  };
  const handleCreatureChange = (event) => {
    setCreature(event.target.value);
  };
  const handleFoodChange = (event) => {
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
          mood={mood}
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
          animal={animal}
          handleAnimalChange={handleAnimalChange}
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
          adjectiveSecond={adjectiveSecond}
          handleAdjectiveSecondChange={handleAdjectiveSecondChange}
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
          mood={mood}
          adjective={adjective}
          animal={animal}
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
