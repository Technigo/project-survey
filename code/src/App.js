import React, { useState } from 'react';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [size, setSize] = useState('');
  const [flavor, setFlavor] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1)
  }

  return (
    <div>
      The Popcorn picker 🍿!
      <p>"You had me at popcorn..."</p>
    </div>
  );
}

//Submit button
//Event.preventDefault