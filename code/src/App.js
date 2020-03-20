import React, { useState } from 'react'
import { Summary } from './components/Summary'
import { NameEntry } from './components/NameEntry'
import { HoardingPlaceEntry } from './components/HoardingPlaceEntry'
import { PaperEntry } from './components/PaperEntry'
import { NextButton } from './components/NextButton'



export const App = () => {
  const[name, setName] = useState("");
  const [place, setPlace] = useState()
  const [paper, setPaper] = useState();
  const [section, setSection] = useState(0);
  
  const  handleSubmit = event => {
    event.preventDefault()
    setSection(section +1)
  };
  
    return (
    <div className="app">
      <h1>Stock Up?</h1>
      <section className="survey-container">
        <form className="form-display" onSubmit={handleSubmit}>
          {section === 0 && <NameEntry name={name} setName={setName} />}
          {section === 1 && <HoardingPlaceEntry place={place} setPlace={setPlace} />}
          {section === 2 && <PaperEntry paper={paper} setPaper={setPaper} />}
          {section < 3 &&
            <NextButton name={name} section={section} place={place} paper={paper} />
          }
          {section === 3 && <Summary name={name} place={place} paper={paper} />}
        </form>
      </section>
    </div>
  );
};


