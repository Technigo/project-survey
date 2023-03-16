import React, { useState } from 'react';

import Starter from './components/starter/starter'

export const App = () => {
  // useState before the return function
  const [step, setStep] = useState(1);
  const [starter, setStarter] = useState ('')
  const [pasta, setPasta] = useState ('')
  const [secondo, setSecondo] = useState ('')
  const [dessert, setDessert] = useState ('')

  // constant here to follow the steps and create a path for the questions
  const handleStepIncrease = () => {
    setStep(step + 1);
    console.log({ step })
  }

  
  return (
    <div>
      Find me in src/app.js!
    </div>
  );
}
