import React, { useState } from 'react';
import { Name } from 'components/Name';
import { Size } from 'components/Size';
import { Flavor } from 'components/Flavor';
import { Topping } from 'components/Topping';
import { Result } from 'components/Result';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [size, setSize] = useState('');
  const [flavor, setFlavor] = useState('');
  const [topping, setTopping] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1)
  }

  return (
    <>
      <h1>The Popcorn picker 🍿!</h1>
    
    {step === 1 && (
      <Name name={name} setName={setName} />
    )}

    {step === 2 && (
      <Size size={size} setSize={setSize} />
    )}

    {step === 3 && (
      <Flavor flavor={flavor} setFlavor={setFlavor} />
    )}

    {step === 4 && (
    <>
      <Topping topping={topping} setTopping={setTopping} />
      <button type="submit"onClick={handleStepIncrease}>Submit</button>
    </>
    )}

    {step >= 5 && (
      <Result name={name} size={size} flavor={flavor} topping={topping} />
    )}

    {step < 4 && (
       <button type="button" onClick={handleStepIncrease}>OK</button>
    )}
  </>
  );
}

//Add required feature to the fields
//Event.preventDefault
//Add if/else if topping is chosen. 