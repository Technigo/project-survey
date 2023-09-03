/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

// components
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';
import ProgressBar from './ProgressBar';

import 'styles/form.css';

const QuestionDropdownGenre = ({ step, setStep, section, setSection, genre, setGenre }) => {
  return (
    <>
      <label htmlFor="selectGenre" className="form__question">
        What is a genre you like to listen to?
      </label>
      <div className="select">
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          name="selectedGenre"
          id="selectGenre">
          <option value="Pop">Pop</option>
          <option value="Hiphop">Hiphop</option>
          <option value="Rock">Rock</option>
          <option value="Rhythm and blues">Rhythm and blues</option>
          <option value="Soul">Soul</option>
          <option value="Funk">Funk</option>
          <option value="Reggae">Reggae</option>
          <option value="Ska">Ska</option>
          <option value="Country">Country</option>
          <option value="Folk">Folk</option>
          <option value="Middle eastern">Middle Eastern</option>
          <option value="Jazz">Jazz</option>
          <option value="Disco">Disco</option>
          <option value="Classical">Classical</option>
          <option value="Electronic">Electronic</option>
          <option value="Latin American">Latin American</option>
          <option value="Blues">Blues</option>
          <option value="African">African</option>
          <option value="Asian">Asian</option>
          <option value="Traditional">Traditional</option>
          <option value="Christian">Christian</option>
          <option value="Indie">Indie</option>
          <option value="New-age">New-age</option>
        </select>
        <span className="focus" />
      </div>
      <div>
        <PreviousButton
          section={section}
          setSection={setSection}
          whatQuestionPrevious="thirdQuestion"
          setStep={setStep}
          whatStepBefore="4" />
        <NextButton
          whatQuestionNext="fifthQuestion"
          defaultState=""
          currentState={genre}
          message="Please select a genre"
          section={section}
          setSection={setSection}
          step={step}
          setStep={setStep}
          whatStepNext="5" />
      </div>
      <ProgressBar
        step={step} />
    </>
  )
}

export default QuestionDropdownGenre;