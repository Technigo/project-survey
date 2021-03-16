import { useState } from 'react';

import DropdownLocation from 'DropdownLocation'
import NameInput from 'NameInput'
import RadioBtnAge from 'RadioBtnAge'
import React from 'react'
import Summary from 'Summary'
import Header from './Header'

import './index.css';

export const App = () => {

// Selecting the next section state
const [section, setSection] = useState('welcome');
// Name state
const [name, setName] = useState('');
// Location state
const [location, setLocation] = useState('Stockholm');
// Age group state
const [ageGroup, setAgeGroup] = useState('');



// Functions of getting the input

const getNameInput = inputName => {
  console.log(inputName)
  setName(inputName);
};

  return (
    <>
      {/* WELCOME SECTION */}
      {section === 'welcome' && (
          <div className='welcome'>
            <Header />
            <button
              className='start-btn'
              onClick={event => { setSection('name-input') }}
            >
              Start
            </button>
          </div>
      )}
    

      {/* NAME SECTION */}
      {section === 'name-input' && (
        <section className='name-input'>
          <NameInput
          required={true}
          name={name}
          setName={setName}
          id='name'
          onNameChange={getNameInput}
          />
          <div className='button-wrapper'>
            <button
              className='back-button'
              type='button'
              value='welcome'
              onClick={event => { setSection(event.target.value) }}
            >
              Back
            </button>
            <button
              className='next-button'
              type="submit"
              value='location'
              onClick={event => { setSection(event.target.value) }}
            >
              Next
            </button>
          </div>
        </section>
      )}
      

      {/* LOCATION SECTION */}
      {section === 'location' && (
        <section className='location'>
        <DropdownLocation 
          location={location}
          label={name}
          setLocation={setLocation}
        />

        <div className='button-wrapper'>
          <button
            type="button"
            value="name-input"
            onClick={event => { setSection(event.target.value) }}
            className="back-button"
          >
            Back
          </button> 
          <button
            type="submit"
            value="age"
            onClick={event => { setSection(event.target.value) }}
            className="next-button"
          >
            Next
          </button>
      </div>
      </section>
      )}
      

      {/* AGE SECTION */}
      {section === 'age' && (
        <section className='radio-age'>
          <RadioBtnAge 
          ageGroup={ageGroup}
          setAgeGroup={setAgeGroup}
          />
          <button
            value='summary'
            onClick={event => { setSection(event.target.value) }}
          >
            Submit
          </button>
        </section>
      )}
      

      {/* SUMMARY */}
      {section === 'summary' && (
        <section>
          <Summary
          age={ageGroup}
          location={location}
          name={name}
        />
        </section>
      )}
      
    </>
  )
}
