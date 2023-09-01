import React from 'react';

// components
import SubmitButton from './SubmitButton';
import PreviousButton from './PreviousButton';

const QuestionTextInputSong = ({ song, setSong, section, setSection }) => {
  return (
    <>
      <label htmlFor="songTitle" className="form__question">What&apos;s a song that you can&apos;t get enough of right now?
        <input
          placeholder="Type the title here please..."
          name="goodSong"
          className="input"
          type="text"
          id="songTitle"
          value={song}
          onChange={(e) => setSong(e.target.value)}
          autoComplete="off"
          required />
      </label>
      <div>
        <PreviousButton
          whatQuestionPrevious="fifthQuestion"
          section={section}
          setSection={setSection} />
        <SubmitButton
          whatQuestionNext="summary"
          defaultState={0}
          currentState={song.length}
          message="Just...something?"
          section={section}
          setSection={setSection} />
      </div>
    </>
  )
}
export default QuestionTextInputSong;