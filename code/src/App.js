import { Header } from './Header.js';
import { Nameinput } from 'Nameinput.js';
import React, { useState } from 'react';
import { Dropdown } from "./Dropdown.js";
import { Radiobutton } from "./Radiobutton.js";
import { Checkbox } from "./Checkbox.js";
import { Summary } from "./Summary.js";
import './index.css';

export const App = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('Stockholm');
  const [ageGroup, setAgeGroup] = useState('');
  const [showSummary, setShowSummary] = useState(false);
  const [section, setSection] = useState('welcome');
  const [contactme, setContactme] = useState([]);

  /* Functions for handling input from form */

  const handleNameInput = inputName => {
    setName(inputName);
  };

  const handleContactmeChange = contactmeValue => {
    contactme.includes(contactmeValue)
      ? setContactme(contactme.filter(item => item !== contactmeValue))
      : setContactme([...contactme, contactmeValue]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSummary(true);
  };

  return (

    <>
      {!showSummary ? (
        <form
          onSubmit={handleSubmit}
          id="form">

          {section === 'welcome' && (
            <div className="welcome">
              <Header />
              <div className="button-container" tabIndex="0">

                <img
                  className="start-button"
                  src="https://www.flaticon.com/svg/static/icons/svg/482/482663.svg"
                  alt="pointer"
                  onClick={event => { setSection('input') }}
                  value="input"
                />
              </div>
            </div>
          )};

          {/* Nameinput section  */}

          {section === 'input' && (
            <div className="input">

              <Nameinput
                name={name}
                setName={setName}
                id="name"
                onNameChange={handleNameInput}
                required
              />
              <div className="button-container">
                <button
                  type="button"
                  onClick={event => { setSection(event.target.value) }}
                  value="welcome"
                  className="back-button">
                  Back
              </button>

                <button
                  onClick={() => { setSection('dropdown') }}
                  type="submit"
                  value='dropdown'
                  className="next-button">
                  Next
              </button>
              </div>
            </div>
          )};


          {/* Dropdown section  */}

          {section === 'dropdown' && (
            <section id="dropdown">
              <div className="dropdown">
                <Dropdown location={location} setLocation={setLocation} label={name} />

                <div className="button-container">
                  <button
                    type="button"
                    onClick={event => { setSection(event.target.value) }}
                    value="input"
                    className="back-button">
                    Back
                  </button>

                  <button
                    type="submit"
                    onClick={event => { setSection(event.target.value) }}
                    value="checkbox"
                    className="next-button">
                    Next
                  </button>
                </div>
              </div>
            </section>
          )};


          {section === 'checkbox' && (
            <div className="checkbox">
              <Checkbox
                contactme={contactme}
                onContactmeChange={handleContactmeChange}
              />

              <div className="button-container">
                <button
                  type="button"
                  onClick={event => { setSection(event.target.value) }}
                  value="dropdown"
                  className="back-button">
                  Back
              </button>

                <button
                  type="submit"
                  onClick={event => { setSection(event.target.value) }}
                  value="radiobutton"
                  className="next-button">
                  Next
                </button>
              </div>
            </div>
          )};

          {section === 'radiobutton' && (
            <section className="radiobutton">

              <Radiobutton
                ageGroup={ageGroup}
                setAgeGroup={setAgeGroup}
                label="age" />

              <div className="button-container">
                <button
                  type="button"
                  onClick={event => { setSection(event.target.value) }}
                  value="checkbox">
                  Back
              </button>

                <button
                  type="submit"
                  onClick={() => { setShowSummary() }}
                  value="summary">
                  Submit
              </button>
              </div>
            </section>
          )};

        </form>

      ) : (
          <Summary
            name={name}
            location={location}
            ageGroup={ageGroup} />

        )};
    </>
  );
};