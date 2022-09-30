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
  // The stepcounter starts at 0 because the first step is not a question.
  // Then, for every step, a new question is shown with the same number as step.
  // At step 5 the button changes text to "submit" and at last step there is no button
  return (
    <div className="container">
      {step === 0 && (
        <><h1>Welcome!</h1><h2>This is Linnéas <b className="neon">NEONtastic</b> survey about bike commuting.</h2>
          <button className="btn" type="button" onClick={handleStepIncrease}>Start!</button>
        </>
      )}
      {step === 1 && (
        <><p>Question: {step}</p><NameOne name={name} setName={setName} />
          <button className="btn" type="button" onClick={handleStepIncrease}>Next question</button>
        </>
      )}
      {step === 2 && (
        <><p>Question: {step}</p><HomeTwo home={home} setHome={setHome} />
          <button className="btn" type="button" onClick={handleStepIncrease}>Next question</button>
        </>
      )}
      {step === 3 && (
        <><p>Question: {step}</p><LengthThree length={length} setLength={setLength} />
          <button className="btn" type="button" onClick={handleStepIncrease}>Next question</button>
        </>
      )}
      {step === 4 && (
        <><p>Question: {step}</p><BikeFour bike={bike} setBike={setBike} />
          <button className="btn" type="button" onClick={handleStepIncrease}>Next question</button>
        </>
      )}
      {step === 5 && (
        <><p>Question: {step}</p><WantFive want={want} setWant={setWant} />
          <button className="btn" type="button" onClick={handleStepIncrease}>Submit!</button>
        </>)}
      {step === 6 && (
        <><h2 className="summaryText">Summary</h2>
          <Summary name={name} home={home} lenght={length} bike={bike} want={want} />
        </>)}
    </div>
  );
}