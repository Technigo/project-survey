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
        name="musical-artist"
        onChange={handleArtistName}
        value={artistName}>
        <option value="">Select an artist</option>
        <optgroup>Taylor Swift</optgroup>
        <optgroup>Justin Bieber</optgroup>
        <optgroup>Nickelback</optgroup>
        <optgroup>Blue Man Group</optgroup>
        <optgroup>Aqua</optgroup>
        <optgroup>Metallica</optgroup>
        <optgroup>Billy Ray Cyrus</optgroup>
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
