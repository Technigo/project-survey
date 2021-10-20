import React, { useState } from 'react';

import WelcomePage from './WelcomePage';
import QuestionOne from './QuestionOne';
import QuestionTwo from './QuestionTwo';
import QuestionThree from './QuestionThree';
import QuestionFour from './QuestionFour';
import Overview from './Overview';

const Form = () => {
  const [nameInput, setNameInput] = useState('');
  const [plantSkill, setPlantSkill] = useState('');
  const [humidity, setHumidity] = useState('');
  const [favouritePlant, setFavouritePlant] = useState('');
  const [step, setStep] = useState(1);
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
      if (plantSkill === '') {
        setAlert(true);
      } else {
        setAlert(false);
        setStep(step + 1);
      }
    } else if (step === 4) {
      if (humidity === '') {
        setAlert(true);
      } else {
        setAlert(false);
        setStep(step + 1);
      }
    } else if (step === 5) {
      if (favouritePlant === '') {
        setAlert(true);
      } else {
        setAlert(false);
        setStep(step + 1);
      }
    } else {
      setStep(step + 1);
    }
  };

  const onEnter = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setStep(step + 1);
    }
  };

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
          plantSkill={plantSkill}
          onPlantSkillChange={onPlantSkillChange}
          alert={alert}
          onStepChange={onStepChange}
          onEnter={onEnter}
        />
      )}
      {step === 4 && (
        <QuestionThree
          humidity={humidity}
          onHumidityChange={onHumidityChange}
          alert={alert}
          onStepChange={onStepChange}
          onEnter={onEnter}
        />
      )}
      {step === 5 && (
        <QuestionFour
          favouritePlant={favouritePlant}
          onFavouritePlantChange={onFavouritePlantChange}
          alert={alert}
          onStepChange={onStepChange}
          onEnter={onEnter}
        />
      )}
      {step === 6 && (
        <Overview
          nameInput={nameInput}
          plantSkill={plantSkill}
          humidity={humidity}
          favouritePlant={favouritePlant}
        />
      )}
    </div>
  );
};

export default Form;
