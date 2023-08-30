/* eslint-disable max-len */
import React, { useState } from 'react';

// components
import { QuestionTextInputName } from './QuestionTextInputName';
import QuestionRadioButtonsAge from './QuestionRadioButtonsAge';
import QuestionRangeSlider from './QuestionRangeSlider';
import QuestionCheckboxes from './QuestionCheckboxes';
import QuestionTextArea from './QuestionTextArea';

export const SurveyForm = () => {
  const [section, setSection] = useState('firstQuestion');
  const [firstName, setFirstName] = useState(''); // Declare a state variable...
  const [ageGroup, setAgeGroup] = useState('');
  const [range, setRange] = useState('');
  const [platforms, setPlatforms] = useState('');
  const [favoriteSong, setFavoriteSong] = useState('');
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
    <div className="questions-wrapper">
      <form id="surveyForm" className="form" method="post" onSubmit={handleSubmit}>
        {section === 'firstQuestion' && (
          <QuestionTextInputName
            firstName={firstName}
            setFirstName={setFirstName}
            section={section}
            setSection={setSection} />
        )}
        {section === 'secondQuestion' && (
          <QuestionRadioButtonsAge
            section={section}
            setSection={setSection}
            ageGroup={ageGroup}
            setAgeGroup={setAgeGroup} />
        )}
        {section === 'thirdQuestion' && (
          <QuestionRangeSlider
            range={range}
            setRange={setRange}
            section={section}
            setSection={setSection} />
        )}
        {section === 'fourthQuestion' && (
          <QuestionCheckboxes
            platforms={platforms}
            setPlatforms={setPlatforms}
            section={section}
            setSection={setSection} />
        )}
        {section === 'fifthQuestion' && (
          <QuestionTextArea
            favoriteSong={favoriteSong}
            setFavoriteSong={setFavoriteSong}
            section={section}
            setSection={setSection} />
        )}
        {section === 'summary' && (
          <p>Your name is {firstName}</p>
        )}
      </form>
    </div>
  )
}

