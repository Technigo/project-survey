import { useState } from 'react';

import DropdownLocation from 'DropdownLocation'
import NameInput from 'NameInput'
import RadioBtnAge from 'RadioBtnAge'
import React from 'react'
import Summary from 'Summary'
import Header from './Header'

export const App = () => {

// Selecting the next section state
const [section, setSection] = useState('welcome');
// Name state
const [name, setName] = useState('');
// Location state
const [location, setLocation] = useState('Stockholm');



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
          required
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
              onClick={event => { setSection('welcome') }}
            >
              Back
            </button>
            <button
              className='next-button'
              type="submit"
              value='location'
              onClick={event => { setSection('location') }}
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
            onClick={event => { setSection('name-input') }}
          >
            Back
          </button> 
          <button
            onClick={event => { setSection('age') }}
          >
            Next
          </button>
      </div>
      </section>
      )}
      

      {/* AGE SECTION */}
      {section === 'age' && (
        <section className='radio-age'>
          <RadioBtnAge />
          <button
            onClick={event => { setSection('summary') }}
          >
            Submit
          </button>
        </section>
      )}
      

      {/* SUMMARY */}
      {section === 'summary' && (
        <section>
          <Summary/>
        </section>
      )}
      
    </>
  )
}
