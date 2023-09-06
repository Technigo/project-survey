/* eslint-disable max-len */
import React, { useState } from 'react';

// components
import LandingPage from './LandingPage';
import { QuestionTextInputName } from './QuestionTextInputName';
import QuestionRadioButtonsAge from './QuestionRadioButtonsAge';
import QuestionCheckboxes from './QuestionCheckboxes';
import QuestionTextInputSong from './QuestionTextInputSong';
import QuestionDropdownGenre from './QuestionDropdownGenre';
import Summary from './Summary';

// Styling
import 'styles/form.css';

export const SurveyForm = () => {
  const [step, setStep] = useState('0');
  const [section, setSection] = useState('startingPage');
  const [firstName, setFirstName] = useState(''); // Declare a state variable...
  const [ageGroup, setAgeGroup] = useState('');
  const [devices, setDevices] = useState('');
  const [song, setSong] = useState('');
  const [genre, setGenre] = useState('');
  const handleSubmit = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();
    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }
  return (
    <main role="main">
      <section className="form__container">
        <form id="surveyForm" className="form" method="post" onSubmit={handleSubmit}>
          {section === 'startingPage' && (
            <LandingPage
              step={step}
              setStep={setStep}
              section={section}
              setSection={setSection} />
          )}
          {section === 'firstQuestion' && (
            <QuestionTextInputName
              step={step}
              setStep={setStep}
              firstName={firstName}
              setFirstName={setFirstName}
              section={section}
              setSection={setSection} />
          )}
          {section === 'secondQuestion' && (
            <QuestionRadioButtonsAge
              step={step}
              setStep={setStep}
              section={section}
              setSection={setSection}
              ageGroup={ageGroup}
              setAgeGroup={setAgeGroup} />
          )}
          {section === 'thirdQuestion' && (
            <QuestionCheckboxes
              step={step}
              setStep={setStep}
              devices={devices}
              setDevices={setDevices}
              section={section}
              setSection={setSection} />
          )}
          {section === 'fourthQuestion' && (
            <QuestionDropdownGenre
              step={step}
              setStep={setStep}
              genre={genre}
              setGenre={setGenre}
              section={section}
              setSection={setSection} />
          )}
          {section === 'fifthQuestion' && (
            <QuestionTextInputSong
              step={step}
              setStep={setStep}
              song={song}
              setSong={setSong}
              section={section}
              setSection={setSection} />
          )}
          {section === 'summary' && (
            <Summary
              firstName={firstName}
              ageGroup={ageGroup}
              devices={devices}
              song={song}
              genre={genre}
              section={section}
              setSection={setSection} />
          )}
        </form>
      </section>
    </main>
  )
}

