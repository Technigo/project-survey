/* eslint-disable max-len */
import React, { useState } from 'react';

// components
import { QuestionTextInputName } from './QuestionTextInputName';

export const SurveyForm = () => {
  const [section, setSection] = useState('firstQuestion');
  const [firstName, setFirstName] = useState(''); // Declare a state variable...
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
          <p>
        How old are you?
            <label htmlFor="15-25">
              <input
                type="radio"
                name="age"
                value="15-25"
                id="15-25" /> 15-25
            </label>
            <label htmlFor="26-35">
              <input
                type="radio"
                name="age"
                value="26-35"
                id="26-35" /> 26-35
            </label>
            <label htmlFor="36-45">
              <input
                type="radio"
                name="age"
                value="36-45"
                id="36-45" /> 36-45
            </label>
            <label htmlFor="46-55">
              <input
                type="radio"
                name="age"
                value="46-55"
                id="46-55" /> 46-55
            </label>
            <label htmlFor="56-65">
              <input
                type="radio"
                name="age"
                value="56-65"
                id="56-65" /> 56-65
            </label>
            <label htmlFor="secret">
              <input
                type="radio"
                name="age"
                value="secret"
                id="secret" /> I prefer not to say
            </label>
          </p>
        )}
        {section === 'thirdQuestion' && (
          <label htmlFor="dropdownMenu">
          How often do you listen to music?
            <select
              id="dropdownMenu"
              name="musicUsage"
              value={selectedOption} // force the select's value to match the state variable and update the state variable on any change
              onChange={(e) => setSelectedOption(e.target.value)}>
              <option value="daily">Daily</option>
              <option value="weekly">Once a week</option>
              <option value="monthly">Once a month</option>
              <option value="yearly">Once a year</option>
            </select>
          </label>
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
      </form>
    </div>
  )
}

