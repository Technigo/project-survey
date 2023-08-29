/* eslint-disable max-len */
import React, { useState } from 'react';

// components
import { QuestionTextInputName } from './QuestionTextInputName';
import QuestionRadioButtonsAge from './QuestionRadioButtonsAge';
import QuestionDropdownMenu from './QuestionDropdownMenu';

export const SurveyForm = () => {
  const [section, setSection] = useState('firstQuestion');
  const [firstName, setFirstName] = useState(''); // Declare a state variable...
  const [ageGroup, setAgeGroup] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [otherPlatforms, setOtherPlatforms] = useState('');
  const [comment, setComment] = useState('');
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
          <QuestionDropdownMenu
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            section={section}
            setSection={setSection} />
        )}
        {section === 'fourthQuestion' && (
          <p>What streaming platform(s) do you use?
            <label htmlFor="checkbox1">
              <input
                type="checkbox"
                name="spotify"
                id="checkbox1"
                defaultChecked={false} />Spotify
            </label>
            <label htmlFor="checkbox2">
              <input
                type="checkbox"
                name="soundcloud"
                id="checkbox2"
                defaultChecked={false} />SoundCloud
            </label>
            <label htmlFor="checkbox3">
              <input
                type="checkbox"
                name="bandcamp"
                id="checkbox3"
                defaultChecked={false} />Bandcamp
            </label>
            <label htmlFor="checkbox4">
              <input
                type="checkbox"
                name="YouTube Music"
                id="checkbox4"
                defaultChecked={false} />YouTube Music
            </label>
            <label htmlFor="checkbox5">
              <input
                type="checkbox"
                name="otherPlatforms"
                id="checkbox5"
                defaultChecked={false} />Other:
            </label>
            <label htmlFor="otherPlatformsTextInput">
              <input
                type="text"
                value={otherPlatforms}
                onChange={(e) => setOtherPlatforms(e.target.value)}
                placeholder="Type other platforms here please..."
                id="otherPlatformsTextInput"
                autoComplete="off" />
            </label>
            <label htmlFor="checkbox6">
              <input
                type="checkbox"
                name="noPlatforms"
                id="checkbox6"
                defaultChecked={false} />None
            </label>
          </p>
        )}
        {section === 'fifthQuestion' && (
          <textarea name="comment" placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)} autoComplete="off" />
        )}
        {section === 'summary' && (
          <p>Your name is {firstName}</p>
        )}
      </form>
    </div>
  )
}

