import React, { useState } from 'react';

import Greeting from './Greeting';
import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import ThirdQuestion from './ThirdQuestion';
import FourthQuestion from './FourthQuestion';
import Overview from './Overview';

const Form = () => {
  const [genreChoice, setGenreChoice] = useState('');
  const [bandChoice, setBandChoice] = useState('');
  const [arenaChoice, setArenaChoice] = useState('');
  const [seatChoice, setSeatChoice] = useState('');
  const [tickets, setTickets] = useState('');
  const [step, setStep] = useState(0);

  const onGenreChoiceSet = (event) => {
    setGenreChoice(event.target.value);
  };

  const onBandChoiceSet = (event) => {
    setBandChoice(event.target.value);
  };

  const onArenaChoiceSet = (event) => {
    setArenaChoice(event.target.value);
  };

  const onSeatChoiceSet = (event) => {
    setSeatChoice(event.target.value);
  };

  const onAmountChoiceSet = (event) => {
    setTickets(event.target.value);
  };

  const onStepChange = () => {
    setStep(step + 1);
  };

  const onStepGoBack = () => {
    setStep(step - 1);
  };

  const goBackToStart = () => {
    setStep(step - 5);
  };

  return (
    <div className="mainContainer">
      {step === 0 && <Greeting onStepChange={onStepChange} />}
      {step === 1 && (
        <FirstQuestion
          arenaChoice={arenaChoice}
          onArenaChoiceSet={onArenaChoiceSet}
          onStepChange={onStepChange}
          onStepGoBack={onStepGoBack}
          onAmountChoiceSet={onAmountChoiceSet}
          tickets={tickets}
        />
      )}
      {step === 2 && (
        <SecondQuestion
          genreChoice={genreChoice}
          onGenreChoiceSet={onGenreChoiceSet}
          onStepChange={onStepChange}
          onStepGoBack={onStepGoBack}
        />
      )}
      {step === 3 && (
        <ThirdQuestion
          bandChoice={bandChoice}
          onBandChoiceSet={onBandChoiceSet}
          onStepChange={onStepChange}
          onStepGoBack={onStepGoBack}
          genreChoice={genreChoice}
        />
      )}
      {step === 4 && (
        <FourthQuestion
          seatChoice={seatChoice}
          onSeatChoiceSet={onSeatChoiceSet}
          onStepChange={onStepChange}
          onStepGoBack={onStepGoBack}
        />
      )}
      {step === 5 && (
        <Overview
          arenaChoice={arenaChoice}
          bandChoice={bandChoice}
          seatChoice={seatChoice}
          genreChoice={genreChoice}
          onStepGoBack={onStepGoBack}
          tickets={tickets}
          goBackToStart={goBackToStart}
        />
      )}
    </div>
  );
};

export default Form;
