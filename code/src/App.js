import React, { useState } from 'react';
import { NameOne } from 'components/NameOne'
import { HomeTwo } from 'components/HomeTwo'
import { LengthThree } from 'components/LengthThree'
import { BikeFour } from 'components/BikeFour'
import { WishFive } from 'components/WishFive'

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [home, setHome] = useState('');
  const [length, setLength] = useState('');
  const [bike, setBike] = useState('');
  const [wish, setWish] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  return (
    <div>
      <NameOne name={name} setName={setName} />
      <HomeTwo home={home} setHome={setHome} />
      <LengthThree length={length} setLength={setLength} />
      <BikeFour bike={bike} setBike={setBike} />
      <WishFive wish={wish} setWish={setWish} />
      <p>Current question: {step}</p>
      <button type="button" onClick={handleStepIncrease}>Next question</button>
    </div>
  );
}