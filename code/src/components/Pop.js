import React from 'react';

const Pop = ({ bandChoice, onBandChoiceSet, onStepChange, genreChoice }) => {
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
        <option value="Adele">Adele</option>
        <option value="Ed Sheeran">Ed Sheeran</option>
        <option value="Veronica Maggio">Veronica Maggio</option>
        <option value="Molly Sandén">Molly Sandén</option>
        <option value="Tove Styrke">Tove Styrke</option>
        <option value="Miss Li">Miss Li</option>
      </select>
    </form>
  );
};

export default Pop;