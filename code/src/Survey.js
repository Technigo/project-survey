import React, { useState } from 'react';
import { Button } from 'Button';
import { InputField } from './InputField';
import { Dropdown } from './Dropdown';
import { Radiobutton } from './Radiobutton';
import { RangeSlider } from './RangeSlider';
import { Summary } from './Summary';

const ageGroups = ['18-40', '41-55', '55+'];

export const Survey = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [happiness, setHappiness] = useState('5');
  const [submitted, setSubmitted] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const startSurvey = () => {
    setSubmitted(false);
    setName('');
    setLocation('');
    setAgeGroup('');
    setHappiness('5');
  };

  return (
    <>
      {!submitted && (
        <section className="form-wrapper">
          <h1 className="form-title">Skiing survey</h1>
          <form className="form-content" onSubmit={submitForm}>
            <InputField
              labelText="Your name?"
              id="name"
              type="text"
              placeholder="First and Last name"
              value={name}
              onChange={setName}
            />
            <Dropdown
              labelText="Mountain you last visit?"
              id="location"
              value={location}
              onChange={setLocation}
            />
            <Radiobutton
              id="age-group"
              type="radio"
              ageGroupArray={ageGroups}
              value={ageGroup}
              onChange={setAgeGroup}
            />
            <RangeSlider
              labelText="Happiness when you ski?"
              id="happiness"
              type="range"
              value={happiness}
              onChange={setHappiness}
            />
            <Button type="submit" text="Let's send it in!" />
          </form>
        </section>
      )}
      {submitted && (
        <section className="summary-wrapper">
          <Summary
            name={name}
            location={location}
            ageGroup={ageGroup}
            happiness={happiness}
          />
          <Button
            type="button"
            text="Start survey again"
            onClick={startSurvey}
          />
        </section>
      )}
    </>
  );
};
