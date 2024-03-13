/* eslint-disable max-len */
import React, { useState } from 'react';
import Dates from './Dates';
import Destination from './Destination';
import Name from './Name';
import Summary from './Summary';
import WelcomePage from './WelcomePage';
import Zipper from './Zipper';

const Survey = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [monthType, setMonthType] = useState('');
  const [place, setPlace] = useState('');
  const [range, setRange] = useState('');

  const onSubmit = (event) => {
    event.preventDefault()
  };

  const onClickNext = () => {
    setStep(step + 1);
    if (step === 5) {
      setStep(0)
    }
  }

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onMonthTypeChange = (event) => {
    setMonthType(event.target.value);
  };

  const onPlaceChange = (event) => {
    setPlace(event.target.value);
  };

  const onRangeChange = (event) => {
    setRange(event.target.value);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      {step === 0 && <WelcomePage onClickNext={onClickNext} />}
      {step === 1 && (<Name
        name={name}
        onNameChange={onNameChange}
        onClickNext={onClickNext} />)}
      {step === 2 && <Dates monthType={monthType} onMonthTypeChange={onMonthTypeChange} onClickNext={onClickNext} />}
      {step === 3 && <Destination place={place} onPlaceChange={onPlaceChange} onClickNext={onClickNext} />}
      {step === 4 && <Zipper range={range} onRangeChange={onRangeChange} onClickNext={onClickNext} />}
      {step === 5 && <Summary name={name} monthType={monthType} place={place} range={range} onClickNext={onClickNext} />}
    </form>
  )
}

export default Survey;
