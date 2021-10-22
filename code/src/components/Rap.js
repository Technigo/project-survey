import React from 'react';

const Rap = ({ bandChoice, onBandChoiceSet, onStepChange, genreChoice }) => {
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
        <option value="Viktor Leksell">Viktor Leksell</option>
        <option value="Hov1">Hov1</option>
        <option value="Einár">Einár</option>
        <option value="Grekazo">Grekazo</option>
      </select>
    </form>
  );
};

export default Rap;