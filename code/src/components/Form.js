import React, { useState } from 'React';

import Greeting from './Greeting';
import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import ThirdQuestion from './ThirdQuestion';
import Overview from './Overview';

const Form = () => {
  const [bandChoice, setBandChoice] = useState('');
  const [arenaChoice, setArenaChoice] = useState('');
  const [seatChoice, setSeatChoice] = useState('');
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

  const onStepChange = () => {
    setStep(step + 1);
  };

  return (
    <div>
      {step === 0 && <Greeting />}
      {step === 1 && (
        <FirstQuestion
          bandChoice={bandChoice}
          onBandChoiceSet={onBandChoiceSet}
          onStepChange={onStepChange}
        />
      )}
      {step === 2 && (
        <SecondQuestion
          arenaChoice={arenaChoice}
          onArenaChoiceSet={onArenaChoiceSet}
          onStepChange={onStepChange}
        />
      )}
      {step === 3 && (
        <ThirdQuestion
          seatChoice={seatChoice}
          onSeatChoiceSet={onSeatChoiceSet}
          onStepChange={onStepChange}
        />
      )}
      {step === 4 && (
        <Overview bandChoice={bandChoice} arenaChoice={arenaChoice} seatChoice={seatChoice} />
      )}
    </div>
  );
};

export default Form;
