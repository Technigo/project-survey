import React, { useState } from 'react';
// Question 1, text, What is your name?
import { NameOne } from 'components/NameOne'
// Question 2, select, Where do you live?
import { HomeTwo } from 'components/HomeTwo'
// question 3, radio buttons, How far is it from your home to your work/school?
import { LengthThree } from 'components/LengthThree'
// question 4, radion buttons, Do you have access to a bike?
import { BikeFour } from 'components/BikeFour'
// question 5, range, Do you want to use your bike more than you do today?
import { WantFive } from 'components/WantFive'
// summary of all the answers
import { Summary } from 'components/Summary'

export const App = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [home, setHome] = useState('');
  const [length, setLength] = useState('');
  const [bike, setBike] = useState('');
  const [want, setWant] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  }

  return (
    <div>
      {step === 0 && (
        <><p>Hello! Welcome to a survey about bike commuting</p>
          <button type="button" onClick={handleStepIncrease}>Start!</button>
        </>
      )}
      {step === 1 && (
        <><p>Question: {step}</p><NameOne name={name} setName={setName} />
          <button type="button" onClick={handleStepIncrease}>Next question</button>
        </>
      )}
      {step === 2 && (
        <><p>Question: {step}</p><HomeTwo home={home} setHome={setHome} />
          <button type="button" onClick={handleStepIncrease}>Next question</button>
        </>
      )}
      {step === 3 && (
        <><p>Question: {step}</p><LengthThree length={length} setLength={setLength} />
          <button type="button" onClick={handleStepIncrease}>Next question</button>
        </>
      )}
      {step === 4 && (
        <><p>Question: {step}</p><BikeFour bike={bike} setBike={setBike} />
          <button type="button" onClick={handleStepIncrease}>Next question</button>
        </>
      )}
      {step === 5 && (
        <><p>Question: {step}</p><WantFive want={want} setWant={setWant} />
          <button type="button" onClick={handleStepIncrease}>Submit!</button>
        </>)}
      {step === 6 && (
        <><p>Summary</p>
          <Summary name={name} home={home} lenght={length} bike={bike} want={want} />
        </>)}
    </div>
  );
}