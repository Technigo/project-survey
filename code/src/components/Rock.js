import React from 'react';

const Rock = ({ bandChoice, onBandChoiceSet, onStepChange, genreChoice }) => {
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
        <option value="Måneskin">Måneskin</option>
        <option value="AC/DC">AC/DC</option>
        <option value="Volbeat">Volbeat</option>
        <option value="Pain">Pain</option>
        <option value="Mötley Crüe">Mötley Crüe</option>
        <option value="Mustasch">Mustasch</option>
      </select>

      <button className="button" onClick={onStepChange}>
        Next Question
      </button>
    </form>
  );
};

export default Rock;