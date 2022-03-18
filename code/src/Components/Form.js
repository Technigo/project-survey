import React, { useState } from 'react';

import FirstQuestion  from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import ThirdQuestion from './ThirdQuestion';
import Overview from './Overview';
// import Footer from './Footer';

const Form = () => {
  const [nameInput, setNameInput] = useState('')
  const [step, setStep] = useState(1)
  const [where, setWhere] = useState('')
  const [days, setDayChange] = useState('')

  const onNameInputChange = (event) => {
    setNameInput(event.target.value)
  };

  const onWhereChange = (event) => {
      setWhere(event.target.value)
  };

  const onDayChange = (event) => {
    setDayChange(event.target.value)
  }

  const onStepChange = () => {
      setStep(step + 1);
  };

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
        where={where}
        onWhereChange={onWhereChange}
        onStepChange={onStepChange}
        />
    )}
      {step === 4 && (
      <Overview nameInput={nameInput}
        days={days}
        onDayChange={onDayChange}
        where={where}
        onWhereChange={onWhereChange}
        onStepChange={onStepChange}
        />
    )}
    </div> 
     );
};

export default Form;