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
const [location, setLocation] = useState('');
// Age group state
const [ageGroup, setAgeGroup] = useState('');



// Functions of getting the input

const onNameChange = (e) => {
  setName(e.target.value);
};

const onLocationChange = (e) => {
  setLocation(e.target.value)
}

const onAgeChange = (e) => {
  setAgeGroup(e.target.value)
}

  return (
    <>
      {/* WELCOME SECTION */}
      {section === 'welcome' && (
          <div aria-label="Welcome" className='welcome'>
            <Header />
            <button
              className='start-btn'
              onClick={() => { setSection('name-input') }}
            >
              Start
            </button>
          </div>
      )}
    

      {/* NAME SECTION */}
      {section === 'name-input' && (
        <section aria-label="Name input" className='name-input'>

            <NameInput
          name={name}
          setName={setName}
          id='name'
          onNameChange={onNameChange}
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
        <section aria-label="Location dropdown" className='location'>
        <DropdownLocation 
          location={location}
          label={name}
          onLocationChange={onLocationChange}
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
        <section aria-label="Age select" className='radio-age'>
          <RadioBtnAge 
          ageGroup={ageGroup}
          onAgeChange={onAgeChange}
          />
          

          <div className='button-wrapper'>
          <button
            type="button"
            value="location"
            onClick={event => { setSection(event.target.value) }}
            className="back-button"
          >
            Back
          </button> 
          <button
            className="submit-button"
            value='summary'
            onClick={event => { setSection(event.target.value) }}
          >
            Submit
          </button>
      </div>

        </section>
      )}
      

      {/* SUMMARY */}
      {section === 'summary' && (
        <section aria-label="Summary">
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


