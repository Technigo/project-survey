import React, { useState } from 'react';

import { NameInput } from './NameInput';
import { EmailInput } from './EmailInput';
import { Radiobuttons } from './Radiobuttons';
import { Dropdown } from './Dropdown';
import { Checkbox } from './Checkbox';
import { Summary } from './Summary';

import './form.css';

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [canContributeWith, setCanContributeWith] = useState();
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [wantsToBeMentor, setWantsToBeMentor] = useState(false);
  const [section, setSection] = useState('startText')
  
  const handleSubmit = event => {
    event.preventDefault();
  };


  return (
    <>
      <form onSubmit={handleSubmit}>    
        {section === 'startText' && (
          <>
            <h2 tabIndex="0">If YES, please fill in the form 
              <span role="img" aria-label="A blue heart emoji">&#128420;</span>
            </h2>
            <section className="button-container">
              <button 
                type="button" 
                onClick={event => {setSection(event.target.value)}} 
                value='firstQuestion'>
                Start!
              </button>
            </section>
          </>
        )}
        
        {section === 'firstQuestion' && (
          <>
            <NameInput 
              id="inputName"
              name={name}
              setName={setName}
            />
            <section className="button-container">
              <button 
                type="button" 
                onClick={event => {setSection(event.target.value)}} 
                value='startText'>
                Back
              </button>
              <button 
                type="button" 
                onClick={event => {setSection(event.target.value)}} 
                value='secondQuestion'>
                Next
              </button>
            </section>
          </>
        )}
        
        {section === 'secondQuestion' && (
          <>
            <EmailInput 
              email={email}
              setEmail={setEmail}
            />
            <section className="button-container">
              <button 
                type="button"
                onClick={event => setSection(event.target.value)}
                value='firstQuestion'>
                Back
              </button>
              <button 
                type="button"
                onClick={event => setSection(event.target.value)}
                value="thirdQuestion">
                Next
              </button>
            </section>
          </>
        )}
        
        {section === 'thirdQuestion' && (
          <>
            <Radiobuttons 
              id="radioButtons"
              canContributeWith={canContributeWith}
              setCanContributeWith={setCanContributeWith}
            />
            <section className="button-container">
              <button 
                type="button"
                onClick={event => setSection(event.target.value)}
                value='secondQuestion'>
                Back
              </button>
              <button 
                type="button"
                onClick={event => setSection(event.target.value)}
                value="fourthQuestion">
                Next
              </button>
            </section>
          </>
        )}
        
        {section === 'fourthQuestion' && (
          <>
            <Dropdown 
              yearsOfExperience={yearsOfExperience} 
              setYearsOfExperience={setYearsOfExperience}
            />
            <section className="button-container">
              <button 
                type="button"
                onClick={event => setSection(event.target.value)}
                value='thirdQuestion'>
                Back
              </button>
              <button 
                type="button"
                onClick={event => setSection(event.target.value)}
                value="lastQuestion">
                Next
                </button>
            </section>
          </>
        )}
        
        {section === 'lastQuestion' && (
          <>
            <Checkbox 
              wantsToBeMentor={wantsToBeMentor} 
              setWantsToBeMentor={setWantsToBeMentor}
            />
            <section className="button-container">
              <button 
                type="button"
                onClick={event => setSection(event.target.value)}
                value='fourthQuestion'>
                Back
              </button>
              <button 
                type="button"
                onClick={event => setSection(event.target.value)}
                value="summary">
                Submit
              </button>
            </section>
          </>
        )}
      </form>
    
      {section === 'summary' && (
        <Summary 
          name={name}
          email={email}
          canContributeWith={canContributeWith}
          yearsOfExperience={yearsOfExperience}
          wantsToBeMentor={wantsToBeMentor}
        />
      )}
    </>
  );
};