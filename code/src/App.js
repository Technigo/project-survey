import React, { useState } from 'react';
import { Header } from './Components/Header';
import { Name } from './Components/Name';
import { Select } from './Components/Select';
import { Checkbox } from './Components/Checkbox';
import { Location } from './Components/Location';
// import { Summary } from './Components/Summary';
import { Feel } from './Components/Feel';
import { Alte } from './Components/Results/Alte';
import { Amapiano } from './Components/Results/Amapiano'
import { Classic } from './Components/Results/Classic'

export const App = () => {
  const [step, setStep] = useState(1)
  const [name, setName] = useState('');
  const [reason, setReason] = useState('');
  const [adjectivesArray, setAdjectivesArray] = useState([])
  const [location, setLocation] = useState('');
  const [feel, setFeel] = useState('');

  console.log(Classic, Amapiano);

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
          <Select
            name={name}
            reason={reason}
            setReason={setReason}
            handleStepIncrease={handleStepIncrease} />
        )}
        {step === 3 && (
          <Location
            location={location}
            setLocation={setLocation}
            handleStepIncrease={handleStepIncrease} />
        )}
        {step === 4 && (
          <Feel
            feel={feel}
            setFeel={setFeel}
            handleStepIncrease={handleStepIncrease} />
        )}
        {step === 5 && (
          <Checkbox
            adjectivesArray={adjectivesArray}
            onAdjectivesArrayChange={onAdjectivesArrayChange}
            handleStepIncrease={handleStepIncrease} />
        )}
        {step === 6 && (
          <Alte name={name} reason={reason} location={location} feel={feel} />
        )}
        {step <= 5 && (
          <div className="footer">
            <p>Step {step}/5</p>
          </div>
        )}
      </div>
    </section>
  );
}
