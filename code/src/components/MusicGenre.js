import React from 'react';
import { Button } from 'components/Button';

export const MusicGenre = ({ genre, setGenre, step, percentage }) => {
  const handleMusicGenre = (e) => {
    setGenre(e.target.value)
  }
  return (
    <>
      <div className="question-number">
        {step <= 5 && <p>Question number: {step}/5</p>}
        <div className="progress-bar">
          <div className="progress-filler" style={{ width: `${percentage}%` }}>{percentage}%</div>
        </div>
      </div>
      <label htmlFor="musicGenre">
        What is your favorite music genre?
        <select
          id="musicGenre"
          onChange={handleMusicGenre}
          value={genre}
          required>
          <option value="">Select a genre:</option>
          <option value="pop">Pop</option>
          <option value="rock">Rock</option>
          <option value="hiphop">HipHop</option>
          <option value="rnb">RnB</option>
          <option value="country">Country</option>
          <option value="blues">Blues</option>
          <option value="other">Other</option>
        </select>
      </label>
      <Button button="Next question" />
    </>
  )
}