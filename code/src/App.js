/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React, { useState } from 'react';
import './index.css';
import { Name } from 'components/Name';
import { ColorSelect } from 'components/ColorSelect';
import { MagicCrystalSelect } from 'components/MagicCrystalSelect.js';
import { Result } from 'components/Result';
/* import { AddMoreButton } from 'components/AddMoreButton'; */
import { Submit } from 'components/Submit';
import { FruitSelect } from 'components/FruitSelect';
import { ToppingSelect } from 'components/ToppingSelect';
import { FlowerSelect } from 'components/FlowerSelect';
import Header from './components/Header'
import Start from './components/Start';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [colorSelect, setColorSelect] = useState('');
  const [magicCrystalSelect, setMagicCrystalSelect] = useState('');
  const [submit, setSubmit] = useState('');
  const [fruitSelect, setFruitSelect] = useState('');
  const [toppingSelect, setToppingSelect] = useState('')
  const [flowerSelect, setFlowerSelect] = useState()

/*   const start = () => {
    setStart(start + 1);
  } */

  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  return (
    <>
     <Header />

      {step === 1 && (
        <Start />
      )}
      {step === 2 && (
        <Name name={name} setName={setName} />
      )}
      {step === 3 && (
      <FruitSelect fruitSelect={fruitSelect} setFruitSelect={setFruitSelect} />
      )}
      {step === 4 && (
        <ColorSelect colorSelect={colorSelect} setColorSelect={setColorSelect} />
      )}
      {step === 5 && (
        // eslint-disable-next-line max-len
        <MagicCrystalSelect magicCrystalSelect={magicCrystalSelect} setMagicCrystalSelect={setMagicCrystalSelect} />
      )}
      {step === 6 && (
        <ToppingSelect ToppingSelect={toppingSelect} setToppingSelect={setToppingSelect} />
       )}
       {step === 7 && (
        <FlowerSelect flowerSelect={flowerSelect} setFlowerSelect={setFlowerSelect} />
      )}
      {step === 8 && (
        <Submit Submit={submit} setSubmit={setSubmit} />
        )}
      {step === 9 && (
        // eslint-disable-next-line max-len
        <Result name={name} colorSelect={colorSelect} magicCrystalSelect={magicCrystalSelect} fruitSelect={fruitSelect} toppingSelect={toppingSelect} />
      )}
    {step < 10 && (
        <div className="content-wrapper">
          <button className="button-wrapper" type="button" onClick={handleStepIncrease}>
          {step === 1 && 'Ehhhm YEAH!!? 🤷‍♀️'}
          {step > 1 && step < 7 && 'Next question 🦄'}
          {step === 8 && 'Find out my magical pony name! 🦄'}
          {step >= 9 && 'Lets do this one more time!🦄'}
          {step === 7 && 'Submit! 🦄'}
          </button>
          <p className="question-count">Question number {step}/{10}</p>
        </div>
      )}
    </>
  );
}

