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
  const [location, setLocation ] = useState('Stockholm');
  const [ageGroup, setAgeGroup] = useState('');
  const [showSummary, setShowSummary] = useState(false);
  const [section, setSection] = useState('welcome');
  const [contactme, setContactme] = useState([]);

 const handleContactmeChange = contactmeValue => {
        contactme.includes(contactmeValue)
            ? setContactme( contactme.filter(item => item !== contactmeValue) )
            : setContactme( [...contactme, contactmeValue] );
    };

  // const handleNameChange = newName => {
  //   setName(newName);
  // }

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  } 

  return (

<>
      <form
      action=""
      onSubmit={handleSubmit}>

    {section === 'welcome' && (
      <>

      <Header />
      <section className="button-container">
        <button
        type="button"
        onClick={event => {setSection(event.target.value)}}
        value="nameInput">
        Click here to start!
        </button>
      </section>
      </>
    )}

    {section === 'nameInput' && (
      <>
        
        <Nameinput 
        name={name} 
        setName={setName} 
        id="inputName" 
        setNameChange={setName}
        required
        />
        <section className="button-container">
          <button
          type="button"
          onClick={event => {setSection(event.target.value)}}
          value="">
            Back
          </button>
          
          <button 
          type="button" 
          onClick={event => {setSection(event.target.value)}} 
          value='dropdown'>
            Next
          </button>
          {console.log(name)}
      </section>
      </>
      )}


      {section === 'dropdown' && (
      <>
        <Dropdown location={location} setLocation={setLocation} />
      
        <section className="button-container">
        <button
          type="button"
          onClick={event => {setSection(event.target.value)}}
          value="nameInput">
            Back
          </button>

        <button 
        type="button" 
        onClick={event => {setSection(event.target.value)}} 
        value='checkbox'>
          Next
        </button>
      </section>
      </>
      )}


       {section === 'checkbox' && (
        <>
        <Checkbox
          contactme={contactme}
          onContactmeChange={handleContactmeChange}
          />

        <section className="button-container">
        <button
          type="button"
          onClick={event => {setSection(event.target.value)}}
          value="dropdown">
            Back
          </button>

          <button 
          type="button" 
          onClick={event => {setSection(event.target.value)}} 
          value='radiobutton'>
            Next
          </button>
          
        </section>
        </>
      )}  

      {section === 'radiobutton' && (
        <>
      <section className="button-container">
      <button
          type="button"
          onClick={event => {setSection(event.target.value)}}
          value="checkbox">
            Back
          </button>

        <Radiobutton ageGroup={ageGroup} setAgeGroup={setAgeGroup} label="age"/>
        <div className="submit">
        <Submit text="Submit!" onClick={event => (event.target.value) }/>
        {console.log(ageGroup)}
        </div>
      </section>
      </>
      )}
  
  </form>
  

  {showSummary && <Summary name={name} location={location} ageGroup={ageGroup}/>} 

  </>
  )}