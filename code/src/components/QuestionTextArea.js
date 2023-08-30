import React from 'react';

// components
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';

const QuestionTextArea = ({ favoriteSong, setFavoriteSong, section, setSection }) => {
  return (
    <>
      <textarea
        name="favoriteSong"
        placeholder="What is it called? What genre(s) does it belong to? Why do you like it so much? Do you have any special memories connected to it?"
        value={favoriteSong}
        onChange={(e) => setFavoriteSong(e.target.value)}
        autoComplete="off" />
      <PreviousButton
        whatQuestionPrevious="fourthQuestion"
        section={section}
        setSection={setSection} />
      <NextButton
        whatQuestionNext="summary"
        defaultState=""
        currentState={favoriteSong}
        message="Just...something?"
        section={section}
        setSection={setSection} />
    </>
  )
}
export default QuestionTextArea;