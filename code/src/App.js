import React, { useState } from 'react';
import './index.css';
import Header from 'components/Header'
import Footer from 'components/Footer'
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
    <>
      <Header title="pet shrimp order" />
      <div className="main">
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
        {step < 5 && (
          <div>
            <button type="button" onClick={handleStepIncrease}>Next</button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
