import React, { useState } from 'react';

import LandingPage from './LandingPage';
import NameQuestion from './NameQuestion';
import WeightQuestion from './WeightQuestion';
import AgeQuestion from './AgeQuestion';
import HeightQuestion from './HeightQuestion';
import HipQuestion from './HipQuestion';
import WaistQuestion from './WaistQuestion';

const Form = () => {
  const [nameInput, setNameInput] = useState('');
  const [weightInput, setWeightInput] = useState('');
  const [ageInput, setAgeInput] = useState('');
  const [heightInput, setHeightInput] = useState('');
  const [hipInput, setHipInput] = useState('');
  const [waistInput, setWaistInput] = useState('');
  const [step, setStep] = useState(1);

  const onNameInputChange = (event) => {
    setNameInput(event.target.value);
  };

  const onWeightInputChange = (event) => {
    setWeightInput(event.target.value);
  };

  const onAgeInputChange = (event) => {
    setAgeInput(event.target.value);
  };

  const onHeightInputChange = (event) => {
    setHeightInput(event.target.value);
  };

  const onHipInputChange = (event) => {
    setHipInput(event.target.value);
  };

  const onWaistInputChange = (event) => {
    setWaistInput(event.target.value);
  };

  const onStepChange = () => {
    setStep(step + 1);
  };

  const onEnter = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setStep(step + 1);
    }
  };

  return (
    <>
      <div>
        {step === 1 && <LandingPage onStepChange={onStepChange} />}
        {step === 2 && (
          <NameQuestion
            nameInput={nameInput}
            onNameInputChange={onNameInputChange}
            onStepChange={onStepChange}
            onEnter={onEnter}
          />
        )}
        {step === 3 && (
          <AgeQuestion
            ageInput={ageInput}
            onAgeInputChange={onAgeInputChange}
            onStepChange={onStepChange}
            onEnter={onEnter}
          />
        )}
        {step === 4 && (
          <WeightQuestion
            weightInput={weightInput}
            onWeightInputChange={onWeightInputChange}
            onStepChange={onStepChange}
            onEnter={onEnter}
          />
        )}
        {step === 5 && (
          <HeightQuestion
            heightInput={heightInput}
            onHeightInputChange={onHeightInputChange}
            onStepChange={onStepChange}
            onEnter={onEnter}
          />
        )}
        {step === 6 && (
          <HipQuestion
            hipInput={hipInput}
            onHipInputChange={onHipInputChange}
            onStepChange={onStepChange}
            onEnter={onEnter}
          />
        )}
        {step === 7 && (
          <WaistQuestion
            waistInput={waistInput}
            onWaistInputChange={onWaistInputChange}
            onStepChange={onStepChange}
            onEnter={onEnter}
          />
        )}
      </div>
    </>
  );
};

export default Form;
