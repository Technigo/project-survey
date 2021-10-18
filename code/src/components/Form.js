import React, { useState } from 'react';
import QuestionOne from './QuestionOne';

import QuestionTwo from './QuestionTwo';
// import QuestionThree from './QuestionThree';
import Overview from './Overview';

const Form = () => {
  const [nameInput, setNameInput] = useState('');
  const [surnameInput, setSurnameInput] = useState('');
  const [step, setStep] = useState(1);

  //Q1
  const onNameInputChange = (event) => {
    setNameInput(event.target.value);
  };

  const onSurnameInputChange = (event) => {
    setSurnameInput(event.target.value);
  };

  //Change
  const onStepChange = (event) => {
    setStep(step + 1);
  };

  console.log('Name:', nameInput);

  return (
    <div>
      {step === 1 && (
        <QuestionOne
          nameInput={nameInput}
          onNameInputChange={onNameInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 2 && (
        <QuestionTwo
          surname={surnameInput}
          onSurnameInputChange={onSurnameInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 3 && (
        <Overview nameInput={nameInput} surnameInput={surnameInput} />
      )}
    </div>
  );
};

export default Form;
