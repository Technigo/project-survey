import { Header } from './Header.js'
import { Nameinput } from 'Nameinput.js'
import React, { useState } from 'react'
import { Dropdown } from "./Dropdown.js"
import { Radiobutton } from "./Radiobutton.js"
import { Checkbox } from "./Checkbox.js"
import { Submit } from "./Submit.js"

import { Summary } from "./Summary.js"

import './index.css'

export const App = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('Stockholm');
  const [ageGroup, setAgeGroup] = useState('');
  const [showSummary, setShowSummary] = useState(false);
  const [section, setSection] = useState('welcome');
  const [contactme, setContactme] = useState([]);

  const handleContactmeChange = contactmeValue => {
    contactme.includes(contactmeValue)
      ? setContactme(contactme.filter(item => item !== contactmeValue))
      : setContactme([...contactme, contactmeValue]);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // setShowSummary(true);
  }

  return (

    <>

      <form
        onSubmit={handleSubmit}>

        {section === 'welcome' && (
          <div className="welcome">
            <Header />
            <div className="button-container">

              <button
                type="button"
                onClick={event => { setSection(event.target.value) }}
                value="input"
                className="start-button">
                  Click here to start!
              </button>

            </div>
          </div>
        )}

        {/* Nameinput section  */}

        {section === 'input' && (
          <div className="input">
            
             <Nameinput
              name={name}
              setName={setName}
              id="inputName"
              setNameChange={setName}
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
                type="button"
                onClick={event => { setSection(event.target.value) }}
                value="dropdown"
                className="next-button">
                Next
              </button>
              {console.log(name)}
            </div>
          </div>
        )}


        {/* Dropdown section  */}

        {section === 'dropdown' && (
          <div className="dropdown">
            <Dropdown location={location} setLocation={setLocation} label={name} />

            <div className="button-container">
              <button
                type="button"
                onClick={event => { setSection(event.target.value) }}
                value="input"
                className="back-button">
                <a href="input">
                  Back
        </a>
              </button>

              <button
                type="button"
                onClick={event => { setSection(event.target.value) }}
                value="checkbox"
                className="next-button">
                  Next
              </button>
            </div>
          </div>
        )}


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
                <a href="dropdown">
                  Back
        </a>
              </button>

              <button
                type="button"
                onClick={event => { setSection(event.target.value) }}
                value="radiobutton"
                className="next-button">
                Next
                </button>
           </div>
          </div>
        )}

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
                type="button"
                onClick={event => { setSection(event.target.value) }}
                value="summary">
                Submit
              </button>
            </div>
          </section>
        )}

      </form>

        {section === 'summary' && (
          <Summary
          name={name} 
          location={location} 
          ageGroup={ageGroup} 
          />
        )}
        

      {/* {showSummary && <Summary
        name={name} 
        location={location} 
        ageGroup={ageGroup} 
        />}
      <Summary /> */}

    </>
  );
};