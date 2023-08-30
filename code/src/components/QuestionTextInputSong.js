import React from 'react';

// components
import SubmitButton from './SubmitButton';
import PreviousButton from './PreviousButton';

const QuestionTextInputSong = ({ favoriteSong, setFavoriteSong, section, setSection }) => {
  return (
    <>
      <p>What&apos;s your favorite song?</p>
      <textarea
        name="favoriteSong"
        placeholder="What is it called? What genre(s) does it belong to? Why do you like it so much? Do you have any special memories connected to it?"
        value={favoriteSong}
        rows={10}
        cols={42}
        minLength={10}
        maxLength={200}
        onChange={(e) => setFavoriteSong(e.target.value)}
        autoComplete="off" />
      <PreviousButton
        whatQuestionPrevious="fourthQuestion"
        section={section}
        setSection={setSection} />
      <SubmitButton
        whatQuestionNext="summary"
        defaultState={0}
        currentState={favoriteSong.length}
        message="Just...something?"
        section={section}
        setSection={setSection} />
    </>
  )
}
export default QuestionTextInputSong;