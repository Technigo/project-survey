/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import FormButtons from './FormButtons';

const artists = ['Taylor Swift', 'Justin Bieber', 'Nickelback', 'Blue Man Group', 'Aqua', 'Metallica'];

const MusicQuestion = ({ artistName, callbackOnChange, step, setStep }) => {
  const handleArtistName = (event) => {
    callbackOnChange(event.target.name, event.target.value);
  };

  return (
    <div className="artist-container">
      <label htmlFor="musical-artist">Choose your favorite artist:</label>
      <select
        id="musical-artist"
        name="artistName"
        onChange={handleArtistName}
        value={artistName}>
        <optgroup label="Popular Artists">
          <option value="">Select an artist</option>
          <option>Taylor Swift</option>
          <option>Justin Bieber</option>
          <option>Nickelback</option>
          <option>Blue Man Group</option>
          <option>Aqua</option>
          <option>Metallica</option>
          <option>Billy Ray Cyrus</option>
        </optgroup>
        {artists.map((artist) => (
          <option key={artist} value={artist}>
            {artist}
          </option>
        ))}
      </select>
      <FormButtons step={step} setStep={setStep} />
    </div>
  );
};

export default MusicQuestion;
