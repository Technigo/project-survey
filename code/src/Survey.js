import React, { useState } from 'react';
import { Button } from 'Button';
import { InputField } from './InputField';
import { Dropdown } from './Dropdown';
import { Radiobutton } from './Radiobutton';
import { Summary } from './Summary';

const ageGroups = ['18-35', '36-50', '51-65', '65+'];

export const Survey = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
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
  };

  return (
    <>
      {!submitted && (
        <section className="form-wrapper">
          <h1 className="form-title">Skier and snowboard survey</h1>
          <form className="form-content" onSubmit={submitForm}>
            <InputField
              labelText="What is you name?"
              id="name"
              type="text"
              placeholder="First and Last name"
              value={name}
              onChange={setName}
            />
            <Dropdown
              labelText="Which mountain did you last visit?"
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
            <Button type="submit" text="Let's send it in!" />
          </form>
        </section>
      )}
      {submitted && (
        <section className="summary-wrapper">
          <Summary name={name} location={location} ageGroup={ageGroup} />
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
