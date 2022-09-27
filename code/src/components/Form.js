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
import Summary from './Summary';

const Form = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [radioButton, setRadioButton] = useState('');
  //   const [userInput, setUserInput] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  };
  const handleNameInputChange = (event) => {
    setName(event.target.value);
  };
  const handleRadioButtonChange = (event) => {
    setRadioButton(event.target.value);
  };

  return (
    <div>
      {step === 1 && <Intro handleStepIncrease={handleStepIncrease} />}
      {step === 2 && (
        <QuestionOne
          handleStepIncrease={handleStepIncrease}
          nameInput={name}
          handleNameInputChange={handleNameInputChange}
          radioButton={radioButton}
          handleRadioButtonChange={handleRadioButtonChange}
        />
      )}
      {step === 3 && <QuestionTwo handleStepIncrease={handleStepIncrease} />}
      {step === 4 && <QuestionThree handleStepIncrease={handleStepIncrease} />}
      {step === 5 && <Summary />}
    </div>
  );
};

export default Form;
