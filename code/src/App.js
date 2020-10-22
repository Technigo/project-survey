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

      {/* Welcome section  */}
    <section className="section welcome" id="welcome"> 
      <>
      <Header />
      <section className="button-container">
         
        <button
         type="button"
         onClick={event => {setSection(event.target.value)}}
         value="#dropdown"
         className="start-button">
        <a href="#input">
          Click here to start! 
        </a>
        </button> 
        
      </section>
      </>
      </section>
 
      {/* Nameinput section  */}

      <section className="section input" id="input"> 
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
         value="#welcome"
         className="back-button">
        <a href="#welcome">
          Back
        </a>
        </button> 
          
        <button
         type="button"
         onClick={event => {setSection(event.target.value)}}
         value="#dropdown"
         className="next-button">
        <a href="#dropdown">
          Next 
        </a>
        </button> 
          {console.log(name)}
      </section>
      </>
      </section>
  
      
      {/* Dropdown section  */}

      <section className="section dropdown" id="dropdown"> 
      <>
        <Dropdown location={location} setLocation={setLocation} />
      
        <section className="button-container">
        <button
         type="button"
         onClick={event => {setSection(event.target.value)}}
         value="#input"
         className="back-button">
        <a href="#input">
          Back
        </a>
        </button> 

        <button
         type="button"
         onClick={event => {setSection(event.target.value)}}
         value="#checkbox"
         className="next-button">
        <a href="#checkbox">
          Next
        </a>
        </button> 
      </section>
      </>
      </section>


      <section className="section checkbox" id="checkbox"> 
        <>
        <Checkbox
          contactme={contactme}
          onContactmeChange={handleContactmeChange}
          />

        <section className="button-container">
        <button
         type="button"
         onClick={event => {setSection(event.target.value)}}
         value="#dropdown"
         className="back-button">
        <a href="#dropdown">
          Back
        </a>
        </button> 

        <button
         type="button"
         onClick={event => {setSection(event.target.value)}}
         value="#radiobutton"
         className="next-button">
        <a href="#radiobutton">
          Next
        </a>
        </button> 

        </section>
        </>
      </section>

      <section className="section radiobutton" id="radiobutton"> 
        <>
      <section className="button-container">
      <button
          type="button"
          onClick={event => {setSection(event.target.value)}}
          value="checkbox">
            Back
          </button>

        <Radiobutton ageGroup={ageGroup} setAgeGroup={setAgeGroup} label="age"/>
        
        <button
         type="button"
         onClick={event => {setShowSummary(event.target.value)}}
         value="#summary"
         className="summary-button">
        <a href="#summary">
        <Submit text="Submit!" />
        </a>
        </button> 
        
      </section>
      </>
      </section>
    
  </form>


  <section class="summary" id="summary">
  <Summary name={name} location={location} ageGroup={ageGroup} /> 
  </section>

  </>)}