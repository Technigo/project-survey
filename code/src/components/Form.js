import React, { useState } from 'react';

import Input from './Questions/Input';
import CheckboxGroup from './Questions/CheckboxGroup';
import RadioGroup from './Questions/Radio'
import SelectMotto from './Questions/Select';

import Submit from './Submit';
import Summary from './Summary';


const Form = () => {

  const [name, setName] = useState('');
  const [energy, setEnergy] = useState([]);
  const [kindness, setKindness] = useState('');
  const [motto, setMotto] = useState([]);


  const [showSummary, setShowSummary] = useState(false);


  const handleNameChange = newName => {
    setName(newName);
  }

  const handleEnergyChange = energyValue => {
    energy.includes(energyValue)
      ? setEnergy(energy.filter(item => item !== energyValue))
      : setEnergy([...energy, energyValue]);
  };

  const handleKindnessChange = kindnessValue => {
    kindness.includes(kindnessValue)
      ? setKindness(kindness.filter(item => item !== kindnessValue))
      : setKindness([...kindness, kindnessValue]);
  };

  const handleMottoChange = newMotto => {
    setMotto(newMotto);
  };


  const handleSubmit = e => {
    e.preventDefault();
    setShowSummary(true);
  };


  return (

    <section className="container">

      { !showSummary ? (

        <form onSubmit={handleSubmit}>

          <Input
            userName={name}
            onNameChange={handleNameChange}
          />

          <CheckboxGroup
            energy={energy}
            onEnergyChange={handleEnergyChange}
          />

          <RadioGroup
            userKindness={kindness}
            onKindnessChange={handleKindnessChange}
          />

          <SelectMotto
            userMotto={motto}
            onMottoChange={handleMottoChange}
          />

          <Submit />

        </form >
      ) : (

          <Summary
            userName={name}
            userEnergy={energy}
            userKindness={kindness} />
        )};
    </section >

  );

};

export default Form;