import React, { useState } from 'react';

import Greeting from './Greeting';
import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import ThirdQuestion from './ThirdQuestion';
import Overview from './Overview';

const Form = () => {
  const [bandChoice, setBandChoice] = useState('');
  const [arenaChoice, setArenaChoice] = useState('');
  const [seatChoice, setSeatChoice] = useState('');
  const [tickets, setTickets] = useState('');
  const [step, setStep] = useState(0);

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

  return (
    <div>
      {step === 0 && <Greeting onStepChange={onStepChange} />}
      {step === 1 && (
        <FirstQuestion
          arenaChoice={arenaChoice}
          onArenaChoiceSet={onArenaChoiceSet}
          onStepChange={onStepChange}
          onAmountChoiceSet={onAmountChoiceSet}
          tickets={tickets}
        />
      )}
      {step === 2 && (
        <SecondQuestion
          bandChoice={bandChoice}
          onBandChoiceSet={onBandChoiceSet}
          onStepChange={onStepChange}
          arenaChoice={arenaChoice}
          tickets={tickets}
        />
      )}
      {step === 3 && (
        <ThirdQuestion
          seatChoice={seatChoice}
          onSeatChoiceSet={onSeatChoiceSet}
          arenaChoice={arenaChoice}
          onStepChange={onStepChange}
          bandChoice={bandChoice}
          tickets={tickets}
        />
      )}
      {step === 4 && (
        <Overview
          arenaChoice={arenaChoice}
          bandChoice={bandChoice}
          seatChoice={seatChoice}
          tickets={tickets}
        />
      )}
    </div>
  );
};

export default Form;
