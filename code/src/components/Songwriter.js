import React from 'react';

const Songwriter = ({ bandChoice, onBandChoiceSet, onStepChange, genreChoice }) => {
  return (
    <>
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
        <option value="Joshua Radin">Joshua Radin</option>
        <option value="Mumford and Sons">Mumford and Sons</option>
        <option value="John Mayer">John Mayer</option>
        <option value="James Arthur">James Arthur</option>
        <option value="Lars Winnerbäck">Lars Winnerbäck</option>
        <option value="First Aid Kit">First Aid Kit</option>
      </select>
    </>
  );
};

export default Songwriter;