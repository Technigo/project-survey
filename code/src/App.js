/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { Location } from 'components/Location';
import { Covid } from './components/Covid';
import { Name } from './components/Name';
import { Travel } from './components/Travel';
import { Summary } from './components/Summary'

export const App = () => {
  const [step, setStep] = useState(1)
  const [name, setName] = useState('')
  const [travel, setTravel] = useState('')
  const [location, setLocation] = useState('')
  const [covid, setCovid] = useState('')

  // function that adds to the step-count.
  const handleStepIncrease = (event) => {
    event.preventDefault()
    setStep(step + 1);
  }
  return (
    <section className="main-container">
      <header>
        <h1>Travel Survey</h1>
      </header>
      <div className="form-container">
        <form className="form" onSubmit={handleStepIncrease}>
          {step === 1 && (
            <Name name={name} setName={setName} />
          )}
          {step === 2 && (
            <Travel travel={travel} setTravel={setTravel} />
          )}
          {step === 3 && (
            <Location location={location} setLocation={setLocation} />
          )}
          {step === 4 && (
            <Covid covid={covid} setCovid={setCovid} />
          )}
          {step === 5 && (
            <Summary name={name} travel={travel} location={location} covid={covid} />
          )}
          {step < 5 && (
            <div className="button-container">
              <button className="next-button" type="submit">Next</button>
            </div>
          )}
        </form>
      </div>
      <footer>
        <p>{step}/5</p>
      </footer>
    </section>
  );
}