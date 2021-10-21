import React, { useState } from 'react';

import LandingPage from './LandingPage';
import NameQuestion from './NameQuestion';
import WeightQuestion from './WeightQuestion';
import AgeQuestion from './AgeQuestion';
import HeightQuestion from './HeightQuestion';
import HipQuestion from './HipQuestion';
import WaistQuestion from './WaistQuestion';
import ActivityQuestion from './ActivityQuestion';
import OtherQuestion from './OtherQuestion';
import Overview from './Overview';

const Form = () => {
  const [nameInput, setNameInput] = useState('');
  const [weightInput, setWeightInput] = useState('');
  const [ageInput, setAgeInput] = useState('');
  const [heightInput, setHeightInput] = useState('');
  const [hipInput, setHipInput] = useState('');
  const [waistInput, setWaistInput] = useState('');
  const [activityInput, setActivityInput] = useState('');
  const [sliderAInput, setSliderAInput] = useState('');
  const [sliderBInput, setSliderBInput] = useState('');
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

  const onActivityInputChange = (event) => {
    setActivityInput(event.target.value);
  };

  const onSliderAInputChange = (event) => {
    setSliderAInput(event.target.value);
  };

  const onSliderBInputChange = (event) => {
    setSliderBInput(event.target.value);
  };

  const onStepChange = () => {
    setStep(step + 1);
  };

  const onEndSurvey = () => {
    window.location.reload();
  };

  const onEnter = (event) => {
    if (event.key === 'Enter' && event.target.value !== '') {
      event.preventDefault();
      onStepChange();
    }
  };

  return (
    <>
      <div>
        {step === 1 && <LandingPage onStepChange={onStepChange} />}
        {step === 2 && (
          <>
            <NameQuestion
              nameInput={nameInput}
              onNameInputChange={onNameInputChange}
              onStepChange={onStepChange}
              onEnter={onEnter}
              step={step}
            />
          </>
        )}
        {step === 3 && (
          <AgeQuestion
            ageInput={ageInput}
            onAgeInputChange={onAgeInputChange}
            onStepChange={onStepChange}
            onEnter={onEnter}
            step={step}
          />
        )}
        {step === 4 && (
          <WeightQuestion
            weightInput={weightInput}
            onWeightInputChange={onWeightInputChange}
            onStepChange={onStepChange}
            onEnter={onEnter}
            step={step}
          />
        )}
        {step === 5 && (
          <HeightQuestion
            heightInput={heightInput}
            onHeightInputChange={onHeightInputChange}
            onStepChange={onStepChange}
            onEnter={onEnter}
            step={step}
          />
        )}
        {step === 6 && (
          <HipQuestion
            hipInput={hipInput}
            onHipInputChange={onHipInputChange}
            onStepChange={onStepChange}
            onEnter={onEnter}
            step={step}
          />
        )}
        {step === 7 && (
          <WaistQuestion
            waistInput={waistInput}
            onWaistInputChange={onWaistInputChange}
            onStepChange={onStepChange}
            onEnter={onEnter}
            step={step}
          />
        )}
        {step === 8 && (
          <ActivityQuestion
            activityInput={activityInput}
            onActivityInputChange={onActivityInputChange}
            onStepChange={onStepChange}
            onEnter={onEnter}
            step={step}
          />
        )}
        {step === 9 && (
          <OtherQuestion
            onStepChange={onStepChange}
            sliderAInput={sliderAInput}
            onSliderAInputChange={onSliderAInputChange}
            sliderBInput={sliderBInput}
            onSliderBInputChange={onSliderBInputChange}
            step={step}
          />
        )}
        {step === 10 && (
          <Overview
            nameInput={nameInput}
            ageInput={ageInput}
            weightInput={weightInput}
            heightInput={heightInput}
            hipInput={hipInput}
            waistInput={waistInput}
            activityInput={activityInput}
            sliderAInput={sliderAInput}
            sliderBInput={sliderBInput}
            step={step}
            onEndSurvey={onEndSurvey}
          />
        )}
      </div>
    </>
  );
};

export default Form;
