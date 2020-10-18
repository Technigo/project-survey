import React from 'react';
import { InputField } from './InputField';
import { Dropdown } from './Dropdown';
import { Radiobutton } from './Radiobutton';

export const Form = () => {
  return (
    <section className="form-wrapper">
      <h2 className="form-title">Survey about sailing course</h2>
      <form className="form-content"></form>
      <InputField
        labelText="Name"
        attributeID="name"
        type="text"
        placeholder="First and Last name"
      />
      <Dropdown labelText="Which country:" attributeID="country" />
      <Radiobutton
        labelTextOne="0-18"
        labelTextTwo="19-30"
        attributeID="age-group"
        type="radio"
      />
    </section>
  );
};
