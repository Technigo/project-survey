import React, { useState } from 'react';

import FirstQuestion  from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import ThirdQuestion from './ThirdQuestion';
import Overview from './Overview';

const Form = () => {
  const [nameInput, setNameInput] = useState('');
  const [step, setStep] = useState(1);
 // const [showResult, setShowResult] = useState(false);
  const [where, setWhere] = useState('hos mig');
  const [days, setDayChange] = useState('')

  const onNameInputChange = (event) => {
    setNameInput(event.target.value)
  };

  const onwhereChange = (place) => {
      setWhere(place)
  };

  const onDayChange = (days) => {
    setDayChange(days)
  }

  const onStepChange = (step) => {
      setStep(step + 1);
  };

if (step === 1) {
  return (    
    <div>
        {step === 1 && (
        <FirstQuestion 
        nameInput={nameInput}
        onNameInputChange={onNameInputChange}
        onStepChange={onStepChange}
        />
    )}
     {step === 2 && (
        <SecondQuestion 
        days={days}
        onDayChange={onDayChange}
        onStepChange={onStepChange}
        />
    )}
      {step === 3 && (
      <ThirdQuestion
        setWhere={where}
        onwhereChange={onwhereChange}
        onStepChange={onStepChange}
        />
    )}
      {step === 4 && (
      <Overview nameInput={nameInput}
        setDay={days}
        onDayChange={onDayChange}
        setWhere={where}
        onwhereChange={onwhereChange}
        onStepChange={onStepChange}
        />
    )}
    </div> 
  );
};
};

export default Form;