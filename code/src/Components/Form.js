import React, { useState } from 'react';

import { NameInput } from './NameInput';
import { EmailInput } from './EmailInput';
import { Radiobuttons } from './Radiobuttons';
import { Dropdown } from './Dropdown';
import { RangeSlider } from './RangeSlider';
import { Buttons } from './Buttons';
import { ProgressBar } from './ProgressBar';
import { Summary } from './Summary';

import './form.css';

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [canContributeWith, setCanContributeWith] = useState();
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [likeMyJob, setLikeMyJob] = useState("");
  const [section, setSection] = useState('startText');

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
              <Buttons
              title="Start!"
              function={setSection}
              value='firstQuestion' 
              />
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
              <Buttons 
                title="Back"
                function={setSection}
                value='startText'
              />
              <Buttons 
                title="Next"
                function={setSection}
                value='secondQuestion'
                disabled={name === ''}
              />
            </section>
            <ProgressBar 
              value='20'
            />
          </>
        )}
        
        {section === 'secondQuestion' && (
          <>
            <EmailInput 
              email={email}
              setEmail={setEmail}
            />
            <section className="button-container">
              <Buttons 
                title="Back"
                function={setSection}
                value='firstQuestion'
              />
              <Buttons 
                title="Next"
                function={setSection}
                value='thirdQuestion'
                disabled={email === ""}
              />
            </section>
            <ProgressBar 
              value='40'
            />
          </>
        )}
        
        {section === 'thirdQuestion' && (
          <>
            <Radiobuttons 
              canContributeWith={canContributeWith}
              setCanContributeWith={setCanContributeWith}
            />
            <section className="button-container">
              <Buttons 
                title="Back"
                function={setSection}
                value='secondQuestion'
              />
               <Buttons 
                title="Next"
                function={setSection}
                value='fourthQuestion'
              />
            </section>
            <ProgressBar 
              value='60'
            />
          </>
        )}
        
        {section === 'fourthQuestion' && (
          <>
            <Dropdown 
              yearsOfExperience={yearsOfExperience} 
              setYearsOfExperience={setYearsOfExperience}
            />
            <section className="button-container">
              <Buttons 
                title="Back"
                function={setSection}
                value='thirdQuestion'
              />
              <Buttons
                title="Next"
                function={setSection}
                value="fifthQuestion"
                disabled={yearsOfExperience === ""}
              />
            </section>
            <ProgressBar 
              value='80'
            />
          </>
        )}

      {section === 'fifthQuestion' && (
        <>
          <RangeSlider 
            likeMyJob={likeMyJob}
            setLikeMyJob={setLikeMyJob}
          />
          <section className="button-container">
            <Buttons 
              title="Back"
              function={setSection}
              value='fourthQuestion'
            />
            <Buttons
              title="Submit"
              function={setSection}
              value='summary'
            />
          </section>
          <ProgressBar 
              value='100'
            />
        </>
      )}
        
      </form>
    
      {section === 'summary' && (
        <Summary 
          name={name}
          email={email}
          canContributeWith={canContributeWith}
          yearsOfExperience={yearsOfExperience}
          likeMyJob={likeMyJob}
        />
      )}
    </>
  );
};