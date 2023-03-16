import React, { useState } from 'react';
import { Header } from './Components/Header';
import { Name } from './Components/Name';
import { Reason } from './Components/Reason';
import { Checkbox } from './Components/Checkbox';
import { Location } from './Components/Location';
import { Genre } from './Components/Genre'
// import { Summary } from './Components/Summary';
import { Feel } from './Components/Feel';
import { Alte } from './Components/Results/Alte';
import { Amapiano } from './Components/Results/Amapiano'
import { Classic } from './Components/Results/Classic'
import { RB } from './Components/Results/RB'

export const App = () => {
  const [step, setStep] = useState(1)
  const [name, setName] = useState('');
  const [reason, setReason] = useState('');
  const [adjectivesArray, setAdjectivesArray] = useState([])
  const [location, setLocation] = useState('');
  const [feel, setFeel] = useState('');
  const [genre, setGenre] = useState('');

  console.log(Classic, Alte, Amapiano);

  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  const onAdjectivesArrayChange = (adjective) => {
    if (adjectivesArray.includes(adjective)) {
      const filteredAdjectivesArray = adjectivesArray.filter(() => {
        return adjectivesArray !== adjective
      })
      setAdjectivesArray(filteredAdjectivesArray)
    } else {
      setAdjectivesArray([...adjectivesArray, adjective])
    }
  }

  return (
    <section className="main-wrapper">
      <Header />
      <div className="survey-wrapper">
        {step === 1 && (
          <Name
            name={name}
            setName={setName}
            handleStepIncrease={handleStepIncrease} />
        )}
        {step === 2 && (
          <Reason
            name={name}
            reason={reason}
            setReason={setReason}
            handleStepIncrease={handleStepIncrease} />
        )}
        {step === 3 && (
          <Genre
            genre={genre}
            setGenre={setGenre}
            handleStepIncrease={handleStepIncrease} />
        )}
        {step === 4 && (
          <Location
            location={location}
            setLocation={setLocation}
            handleStepIncrease={handleStepIncrease} />
        )}
        {step === 5 && (
          <Feel
            feel={feel}
            setFeel={setFeel}
            handleStepIncrease={handleStepIncrease} />
        )}
        {step === 6 && (
          <Checkbox
            adjectivesArray={adjectivesArray}
            onAdjectivesArrayChange={onAdjectivesArrayChange}
            handleStepIncrease={handleStepIncrease} />
        )}
        {step === 7 && (
          <RB name={name} reason={reason} location={location} feel={feel} genre={genre} />
        )}
        {step <= 6 && (
          <div className="footer">
            <p>Step {step}/6</p>
          </div>
        )}
      </div>
    </section>
  );
}
