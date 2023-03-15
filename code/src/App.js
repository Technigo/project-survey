import React, { useState } from 'react';
import { Name } from 'components/Name'
import { Colors } from 'components/Colors'
import { Aquarium } from 'components/Aquarium'
import { Ammount } from 'components/Ammount'
import { Thanks } from 'components/Thanks'

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [colors, setColors] = useState('');
  const [shape, setShape] = useState('');
  const [ammount, setAmmount] = useState(0);

  const handleStepIncrease = () => {
    setStep(step + 1);
  }
  return (
    <><>
      {step === 1 && (
        <Name name={name} setName={setName} />
      )}
      {step === 2 && (
        <Colors colors={colors} setColors={setColors} />
      )}
      {step === 3 && (
        <Ammount ammount={ammount} setAmmount={setAmmount} />
      )}
      {step === 4 && (
        <Aquarium shape={shape} setShape={setShape} />
      )}
      {step === 5 && (
        <Thanks name={name} colors={colors} ammount={ammount} shape={shape} />
      )}
    </>
    {step < 5 && (
      <div>
        <p>Current step {step}</p>
        <button type="button" onClick={handleStepIncrease}>Next</button>
      </div>
    )}
    </>
  );
}
