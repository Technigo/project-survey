import React, { useState } from 'react';
import Header from 'components/Header';
import { FirstQuestion } from 'components/FirtsQuestion'
import { SecondQuestion } from 'components/SecondQuestion'
import { ThirdQuestion } from 'components/ThirdQuestion'
import { FourthQuestion } from 'components/FourthQuestion'
import { FifthQuestion } from 'components/FifthQuestion'
import { Summary } from 'components/Summary'

export const App = () => {
  const [step, setStep] = useState(0)
  const [name, setName] = useState('');
  const [oftenTravels, setOftenTravels] = useState('');
  const [thing, setThing] = useState('');
  const [place, setPlace] = useState();
  const [dreamDestination, setDreamDestination] = useState('');

  const handleStepIncrease = (e) => {
    e.preventDefault();
    setStep(step + 1)
  }

  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <form onSubmit={handleStepIncrease}>
          {step === 0 && (
            <Header />
          )}
          {step === 1 && (
            <FirstQuestion name={name} setName={setName} step={step} />
          )}
          {step === 2 && (
            <SecondQuestion
              name={name}
              oftenTravels={oftenTravels}
              setOftenTravels={setOftenTravels}
              step={step} />
          )}
          {step === 3 && (
            <ThirdQuestion thing={thing} setGenre={setThing} step={step} />
          )}
          {step === 4 && (
            <FourthQuestion place={place} setPlace={setPlace} step={step} />
          )}
          {step === 5 && (
            <FifthQuestion
              dreamDestination={dreamDestination}
              setDreamDestination={setDreamDestination}
              step={step} />
          )}
        </form>
        {step === 6 && (
          <Summary
            name={name}
            oftenTravels={oftenTravels}
            thing={thing}
            place={place}
            dreamDestination={dreamDestination} />
        )}
      </div>
    </div>
  );
}