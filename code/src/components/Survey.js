import React, { useState } from 'react';
import Name from './Name';
import Food from './Food';
import Drink from './Drink';
import Result from './Result';
import ProgressBar from './ProgressBar';

const Survey = () => {
  const [step, setStep] = useState(1);
  const [percent, setPercent] = useState(0);
  const [name, setName] = useState('');
  const [drink, setDrink] = useState('');
  const [food, setFood] = useState('');
  // const [result, setResult] = useState('');

  const handleStepIncrease = () => {
    if (name.length > 0) {
      setStep(step + 1);
      setPercent(percent + 20);
    } else {
      alert('Enter your name babe 💗')
    }
  }

  // constHandleClick = () => {
  //   setPercent(percent + 10)
  // }
  return (
    <>
      {step === 1 && (
        <Name
          name={name}
          setName={setName}
          counter={step}
          setCounter={setStep}
          percentboop={percent}
          setPercentbop={setPercent} />
      )}
      {step === 2 && (
        <Food
          food={food}
          setFood={setFood}
          avocado={step}
          setAvocado={setStep}
          percentboop={percent}
          setPercentbop={setPercent} />
      )}
      {step === 3 && (
        <Drink drink={drink} setDrink={setDrink} cake={step} setCake={setStep} />
      )}
      {step >= 4 && (
        <Result name={name} food={food} drink={drink} />
      )}

      {step < 4 && (
        <>
          <p>Question: {step}/5</p>
          <button type="button" onClick={handleStepIncrease}>Next question</button>
          <ProgressBar percent={percent} />
        </>
      )}
    </>
  );
}

export default Survey;