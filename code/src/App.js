import React, { useState } from 'react';
import Name from './components/Name';
import Love from './components/Love';
import Favorite from './components/Favorite';
import Result from './components/Result';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [love, setLove] = useState('');
  const [favorite, setFavorite] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  return (
    <>
      {step === 1 && (
        <Name name={name} setName={setName} />
      )}
      {step === 2 && (
        <Love love={love} setLove={setLove} />
      )}
      {step === 3 && (
        <Favorite favorite={favorite} setFavorite={setFavorite} />
      )}
      {step >= 4 && (
        <Result name={name} love={love} favorite={favorite} />
      )}

      {step < 4 && (
        <>
          <p>Current step: {step}</p>
          <button type="button" onClick={handleStepIncrease}>Next step</button>
        </>
      )}
    </>
  );
}
