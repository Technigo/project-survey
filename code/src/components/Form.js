import React, { useState } from 'react';

import WelcomePage from './WelcomePage';
import QuestionOne from './QuestionOne';
import QuestionTwo from './QuestionTwo';
import QuestionThree from './QuestionThree';
import Overview from './Overview';

const Form = () => {
  const [nameInput, setNameInput] = useState('');
  const [destination, setDestination] = useState('');
  const [fruit, setFruit] = useState('');
  const [step, setStep] = useState(1);
  const [alert, setAlert] = useState(false);

  const onNameInputChange = (event) => {
    setNameInput(event.target.value);
  };
  const onDestinationChange = (event) => {
    setDestination(event.target.value);
  };
  const onFruitChange = (event) => {
    setFruit(event.target.value);
  };

  //Change question + validation
  const onStepChange = (event) => {
    if (step === 2) {
      if (nameInput === '') {
        setAlert(true);
      } else {
        setAlert(false);
        setStep(step + 1);
      }
    } else if (step === 3) {
      if (destination === '') {
        alert('Choice of destination is required');
      } else {
        setStep(step + 1);
      }
    } else if (step === 4) {
      if (fruit === '') {
        alert('Choice of fruit is required');
      } else {
        setStep(step + 1);
      }
    } else {
      setStep(step + 1);
    }
  };

  // const onStepChange = (event) => {
  //   setStep(step + 1);
  // }

  const onEnter = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setStep(step + 1);
    }
  };

  console.log('Name:', nameInput);

  return (
    <div>
      {step === 1 && <WelcomePage onStepChange={onStepChange} />}
      {step === 2 && (
        <QuestionOne
          nameInput={nameInput}
          onNameInputChange={onNameInputChange}
          alert={alert}
          onStepChange={onStepChange}
          onEnter={onEnter}
        />
      )}
      {step === 3 && (
        <QuestionTwo
          destination={destination}
          onDestinationChange={onDestinationChange}
          onStepChange={onStepChange}
          onEnter={onEnter}
        />
      )}
      {step === 4 && (
        <QuestionThree
          fruit={fruit}
          onFruitChange={onFruitChange}
          onStepChange={onStepChange}
          onEnter={onEnter}
        />
      )}
      {step === 5 && (
        <Overview
          nameInput={nameInput}
          destination={destination}
          fruit={fruit}
        />
      )}
    </div>
  );
};

export default Form;
