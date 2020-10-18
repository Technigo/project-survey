import React, { useState } from 'react';

import { NameInput } from './NameInput';
import { EmailInput } from './EmailInput';
import { Radiobuttons } from './Radiobuttons';
import { Dropdown } from './Dropdown';
import { Checkbox } from './Checkbox';
import { Submit } from './Submit';
import { Summary } from './Summary';

import './form.css';

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [canContributeWith, setCanContributeWith] = useState();
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [wantsToBeMentor, setWantsToBeMentor] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  
  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  };

  return (
    <>
    {!showSummary && <h2 tabIndex="0">Please fill in the form:</h2>}
    {!showSummary && (
    <form onSubmit={handleSubmit}>
      <NameInput 
        id="inputName"
        name={name}
        setName={setName}
      />
      <EmailInput 
        email={email}
        setEmail={setEmail}
      />
      <Radiobuttons 
        id="radioButtons"
        canContributeWith={canContributeWith}
        setCanContributeWith={setCanContributeWith}
      />
      <Dropdown 
       yearsOfExperience={yearsOfExperience} 
       setYearsOfExperience={setYearsOfExperience}/>
      <Checkbox 
        wantsToBeMentor={wantsToBeMentor} 
        setWantsToBeMentor={setWantsToBeMentor}
      />
      <Submit />
    </form>
    )}
    {showSummary && (
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