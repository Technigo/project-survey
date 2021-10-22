import React from 'react';

const Electric = ({ bandChoice, onBandChoiceSet, onStepChange, genreChoice }) => {
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
        <option value="Swedish House Mafia">Swedish House Mafia</option>
        <option value="Depeche Mode">Depeche Mode</option>
        <option value="Tïesto">Tïesto</option>
        <option value="Axwell & Ingrosso">Axwell & Ingrosso</option>
        <option value="David Guetta">David Guetta</option>
        <option value="Galantis">Galantis</option>
      </select>
    </form>
  );
};

export default Electric;