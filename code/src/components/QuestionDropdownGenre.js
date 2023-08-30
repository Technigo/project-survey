import React from 'react';

// components
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';

const QuestionDropdownGenre = ({ section, setSection, genre, setGenre }) => {
  return (
    <>
      <label htmlFor="selectGenre">
        What is a genre you like to listen to?
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          name="selectedGenre"
          id="selectGenre">
          <option value="pop">Pop</option>
          <option value="hiphop">Hiphop</option>
          <option value="rock">Rock</option>
          <option value="rhythmandblues">Rhythm and blues</option>
          <option value="soul">Soul</option>
          <option value="funk">Funk</option>
          <option value="Reggae">Reggae</option>
          <option value="ska">Ska</option>
          <option value="country">Country</option>
          <option value="folk">Folk</option>
          <option value="middleeastern">Middle Eastern</option>
          <option value="jazz">Jazz</option>
          <option value="disco">Disco</option>
          <option value="classical">Classical</option>
          <option value="electronic">Electronic</option>
          <option value="latinamerica">Music of Latin America</option>
          <option value="blues">Blues</option>
          <option value="africa">Music of Africa</option>
          <option value="asia">Music of Asia</option>
          <option value="traditional">Traditional</option>
          <option value="christian">Christian</option>
          <option value="children">Children&apos;s music</option>
          <option value="indie">Indie</option>
          <option value="newage">New-age</option>
        </select>
      </label>
      <PreviousButton
        section={section}
        setSection={setSection}
        whatQuestionPrevious="fifthQuestion" />
      <NextButton
        whatQuestionNext="sixthQuestion"
        defaultState=""
        currentState={genre}
        message="Please select a genre"
        section={section}
        setSection={setSection} />
    </>
  )
}

export default QuestionDropdownGenre;