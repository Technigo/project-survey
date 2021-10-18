import React, { useState } from 'react';

import WelcomePage from './WelcomePage';
import QuestionOne from './QuestionOne';
import QuestionTwo from './QuestionTwo';
import QuestionThree from './QuestionThree';
import Overview from './Overview';

const Form = () => {
  const [nameInput, setNameInput] = useState('');
  const [destination, setDestination] = useState();
  const [fruit, setFruit] = useState();
  const [step, setStep] = useState(1);

  const onNameInputChange = (event) => {
    setNameInput(event.target.value);
  };
  const onDestinationChange = (event) => {
    setDestination(event.target.value);
  };
  const onFruitChange = (event) => {
    setFruit(event.target.value);
  };

  //Change question
  const onStepChange = () => {
    setStep(step + 1);
  };

  console.log('Name:', nameInput);

  return (
    <div>
      {step === 1 && <WelcomePage onStepChange={onStepChange} />}
      {step === 2 && (
        <QuestionOne
          nameInput={nameInput}
          onNameInputChange={onNameInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 3 && (
        <QuestionTwo
          destination={destination}
          onDestinationChange={onDestinationChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 4 && (
        <QuestionThree
          fruit={fruit}
          onFruitChange={onFruitChange}
          onStepChange={onStepChange}
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
