import React, { useState } from 'react';

import Input from './Questions/Input';
import CheckboxGroup from './Questions/CheckboxGroup';
import RadioGroup from './Questions/Radio'
import SelectMotto from './Questions/Select';

import Submit from './Submit';
import Summary from './Summary';



const Form = () => {

  const [name, setName] = useState(' ');
  const [energy, setEnergy] = useState([]);
  const [habits, setHabits] = useState(' ');
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

  const handleHabitsChange = habitsValue => {
    habits.includes(habitsValue)
      ? setHabits(habits.filter(item => item !== habitsValue))
      : setHabits([...habits, habitsValue]);
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

          <div>
            <Input
              userName={name}
              onNameChange={handleNameChange}
            />
          </div>
          <div>
            <CheckboxGroup
              energy={energy}
              onEnergyChange={handleEnergyChange}
            />
          </div>

          <RadioGroup
            userHabits={habits}
            onHabitsChange={handleHabitsChange}
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
            userHabits={habits} />
        )};
    </section >

  );

};

export default Form;