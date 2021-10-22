import React from 'react';

const HeavyMetal = ({ bandChoice, onBandChoiceSet, onStepChange, genreChoice }) => {
  return (
    <form>
      <label htmlFor="band-select">
        <h1>These bands are available with your chosen genre</h1>
        <p>You chose {genreChoice}</p>
      </label>

      <select
        id="band-select"
        className="band-choice"
        value={bandChoice}
        onChange={onBandChoiceSet}
      >
        <option disabled value="">
          Select a band
        </option>
        <option value="Rammstein">Rammstein</option>
        <option value="Metallica">Metallica</option>
        <option value="Ghost">Ghost</option>
        <option value="In Flames">In Flames</option>
        <option value="Sabaton">Sabaton</option>
        <option value="Arch Enemy">Arch Enemy</option>
      </select>

      <button className="button" onClick={onStepChange}>
        Next Question
      </button>
    </form>
  );
};

export default HeavyMetal;
