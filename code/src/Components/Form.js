/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Survey from './Survey';
import Dropdown from './Dropdown';
import Radio from './Radio'
import Input from './Input'

const Form = () => {
  const [name, setName] = useState('');
  const [dropdown, setDropdown] = useState('');
  const [radio, setRadio] = useState('');

  const [surveyComplete, setSurveyComplete] = useState(false);

  // radio button array
  const musicRate = ['I hate music', 'Rarely listens', 'Listen sometimes', 'Listen often', 'I cant live without music'];

  const isSurveyComplete = () => {
    if (name !== '' && dropdown !== '' && radio !== '') {
      return true;
    }
    return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isSurveyComplete()) {
      setSurveyComplete(true);
    } else {
      alert('Please fill out all the fields');
    }
  };

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onDropdownChange = (event) => {
    setDropdown(event.target.value);
  };
  const onRadioChange = (event) => {
    setRadio(event.target.value);
  };

  if (surveyComplete) {
    return (
      <Survey name={name} dropdown={dropdown} radio={radio} />
    );
  } else {
    return (
      <>
        <header className="header">
          <h1 className="header-name">
            Music Survey
          </h1>
        </header>
        <form className="form-container" onSubmit={handleSubmit}>

          <Input name={name} onNameChange={onNameChange} />

          <Dropdown dropdown={dropdown} onDropdownChange={onDropdownChange} />

          <Radio musicRate={musicRate} onRadioChange={onRadioChange} radio={radio} />

          <button
            className="submit-button">SUBMIT
          </button>

        </form>
      </>
    );
  }
};
export default Form;
