/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { Name } from './components/Name';
import { Animal } from './components/Animal';
import { Gender } from './components/Gender';
import { Result } from './components/Result';
import { Country } from './components/Country';
import { Happy } from './components/Happy';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [animal, setAnimal] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [happy, setHappy] = useState(50);
  const [error, setError] = useState(false);
  const handleStepIncrease = () => {
    setStep(step + 1);
    setError(false);
    if (name.length <= 1) {
      setError(true);
      setStep(2);
    } else if (animal.length <= 1) {
      setError(true);
      setStep(3);
    }
  }
  return (
    <>
      {(step === 1) && (
        <>
          <h1 className="typewriter">Let's play a MADLIBS game.</h1>
          <p>Begin by filling out your name.</p>
          <Name name={name} setName={setName} />
        </>
      )}
      {(step === 2) && (
        <Animal animal={animal} setAnimal={setAnimal} />
      )}
      {step === 3 && (
        <Gender gender={gender} setGender={setGender} />
      )}
      {step === 4 && (
        <Country country={country} setCountry={setCountry} />
      )}
      {step === 5 && (
        <Happy happy={happy} setHappy={setHappy} />
      )}
      {step === 6 && (
        <Result name={name} age={age} gender={gender} country={country} happy={happy} />
      )}
      {step < 6 && (
        <>
          <p>
            Current step: {step}/5
          </p>
          <button type="button" onClick={handleStepIncrease}>
            Next
          </button>
        </>
      )}
      {error && (<p>Please fill out this field.</p>)}
      {error && (<p>Field required.</p>)}
    </>
  );
}
