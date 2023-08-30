import React from 'react';

// components
import SubmitButton from './SubmitButton';
import PreviousButton from './PreviousButton';

const QuestionTextInputSong = ({ favoriteSong, setFavoriteSong, section, setSection }) => {
  return (
    <>
      <label htmlFor="favoriteSongTitle" id="song-label">What&apos;s a song that you like?
        <input
          placeholder="Type the title here please..."
          name="favoriteSong"
          type="text"
          id="favoriteSongTitle"
          value={favoriteSong}
          onChange={(e) => setFavoriteSong(e.target.value)}
          autoComplete="off"
          required />
      </label>
      <PreviousButton
        whatQuestionPrevious="fifthQuestion"
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