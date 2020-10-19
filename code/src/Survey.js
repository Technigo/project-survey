import React, { useState } from 'react';
import { InputField } from './InputField';
import { Dropdown } from './Dropdown';
import { Radiobutton } from './Radiobutton';
import { Summary } from './Summary';
import { SubmitButton } from 'SubmitButton';

const ageGroups = ['0-18', '19-30', '30+'];

export const Survey = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {!submitted && (
        <section className="form-wrapper">
          <h1 className="form-title">Survey about sailing course</h1>
          <form
            className="form-content"
            onSubmit={(event) => submitForm(event)}>
            <InputField
              labelText="Name"
              attributeID="name"
              type="text"
              placeholder="First and Last name"
              value={name}
              setText={setName}
            />
            <Dropdown
              labelText="Which country:"
              attributeID="country"
              value={location}
              setText={setLocation}
            />
            <Radiobutton
              attributeID="age-group"
              type="radio"
              value={ageGroup}
              setText={setAgeGroup}
              ageGroupArray={ageGroups}
            />
            <SubmitButton type="submit" text="Send it in!" />
          </form>
        </section>
      )}
      {submitted && (
        <section className="summary-wrapper">
          <Summary name={name} location={location} ageGroup={ageGroup} />
        </section>
      )}
    </>
  );
};
