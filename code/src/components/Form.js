import React, { useState } from 'react';

import WelcomePage from './WelcomePage';
import QuestionOne from './QuestionOne';
import QuestionTwo from './QuestionTwo';
import QuestionThree from './QuestionThree';
import QuestionFour from './QuestionFour';
import QuestionFive from './QuestionFive';
import Overview from './Overview';

const Form = () => {
  const [nameInput, setNameInput] = useState('');
  const [plantSkill, setPlantSkill] = useState('');
  const [humidity, setHumidity] = useState('');
  const [favouritePlant, setFavouritePlant] = useState('');
  const [sliderInput, setSliderInput] = useState(2);
  const [step, setStep] = useState(0);
  const [alert, setAlert] = useState(false);

  const onNameInputChange = (event) => {
    setNameInput(event.target.value);
  };
  const onPlantSkillChange = (event) => {
    setPlantSkill(event.target.value);
  };
  const onHumidityChange = (event) => {
    setHumidity(event.target.value);
  };
  const onFavouritePlantChange = (event) => {
    setFavouritePlant(event.target.value);
  };
  const onSliderInputChange = (event) => {
    setSliderInput(event.target.value);
  };

  //Change question + validation
  const onStepChange = () => {
    if (step === 1) {
      if (nameInput === '') {
        setAlert(true);
      } else {
        setAlert(false);
        setStep(step + 1);
      }
    } else if (step === 2) {
      if (plantSkill === '') {
        setAlert(true);
      } else {
        setAlert(false);
        setStep(step + 1);
      }
    } else if (step === 3) {
      if (humidity === '') {
        setAlert(true);
      } else {
        setAlert(false);
        setStep(step + 1);
      }
    } else if (step === 4) {
      if (favouritePlant === '') {
        setAlert(true);
      } else {
        setAlert(false);
        setStep(step + 1);
      }
    } else if (step === 5) {
      setStep(step + 1);
    } else {
      setStep(step + 1);
    }
  };

  const onPreviousQuestionChange = () => {
    setStep(step - 1);
  };

  const onEnter = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setStep(step + 1);
    }
  };

  return (
    <div>
      {step === 0 && <WelcomePage onStepChange={onStepChange} />}
      {step === 1 && (
        <QuestionOne
          nameInput={nameInput}
          onNameInputChange={onNameInputChange}
          alert={alert}
          onStepChange={onStepChange}
          onEnter={onEnter}
          step={step}
        />
      )}
      {step === 2 && (
        <QuestionTwo
          plantSkill={plantSkill}
          onPlantSkillChange={onPlantSkillChange}
          alert={alert}
          onStepChange={onStepChange}
          onPreviousQuestionChange={onPreviousQuestionChange}
          onEnter={onEnter}
          step={step}
        />
      )}
      {step === 3 && (
        <QuestionThree
          humidity={humidity}
          onHumidityChange={onHumidityChange}
          alert={alert}
          onStepChange={onStepChange}
          onPreviousQuestionChange={onPreviousQuestionChange}
          onEnter={onEnter}
          step={step}
        />
      )}
      {step === 4 && (
        <QuestionFour
          favouritePlant={favouritePlant}
          onFavouritePlantChange={onFavouritePlantChange}
          alert={alert}
          onStepChange={onStepChange}
          onPreviousQuestionChange={onPreviousQuestionChange}
          onEnter={onEnter}
          step={step}
        />
      )}
      {step === 5 && (
        <QuestionFive
          sliderInput={sliderInput}
          onSliderInputChange={onSliderInputChange}
          alert={alert}
          onStepChange={onStepChange}
          onPreviousQuestionChange={onPreviousQuestionChange}
          onEnter={onEnter}
          step={step}
        />
      )}
      {step === 6 && (
        <Overview
          nameInput={nameInput}
          plantSkill={plantSkill}
          humidity={humidity}
          favouritePlant={favouritePlant}
          sliderInput={sliderInput}
        />
      )}
    </div>
  );
};

export default Form;
