import React from 'react';

const ThirdQuestion = ({ bandChoice, onBandChoiceSet, onStepChange, arenaChoice }) => {
  if (arenaChoice === 'Smaller inside venue') {
    return (
      <form>
        <label htmlFor="band-select">
          <h1>These bands are available in your chosen venue</h1>
          <p>You chose {arenaChoice}</p>
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
          <option value="Benjamin Ingrosso">Benjamin Ingrosso</option>
          <option value="Newkid">Newkid</option>
          <option value="Hov1">Hov1</option>
          <option value="Miss Li">Miss Li</option>
          <option value="Myra Granberg">Myra Granberg</option>
        </select>

        <button className="button" onClick={onStepChange}>
          Next Question
        </button>
      </form>
    );
  } else if (arenaChoice === 'Larger inside venue') {
    return (
      <form>
        <label htmlFor="band-select">
          <h1>These bands are available in your chosen venue: {arenaChoice}</h1>
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
          <option value="Ed Sheeran">Ed Sheeran</option>
          <option value="Coldplay">Coldplay</option>
          <option value="Billie Eilish">Billie Eilish</option>
          <option value="Justin Bieber">Justin Bieber</option>
          <option value="Smith & Thell">Smith & Thell</option>
          <option value="Mumford and sons">Mumford and sons</option>
        </select>

        <button className="button" onClick={onStepChange}>
          Next Question
        </button>
      </form>
    );
  } else if (arenaChoice === 'Smaller inside venue') {
    return (
      <form>
        <label htmlFor="band-select">
          <h1>These bands are available in your chosen venue: {arenaChoice}</h1>
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
          <option value="Rammstein">Killswitch Engage</option>
          <option value="Håkan Hellström">Lars Winnerbäck</option>
          <option value="Coldplay">Hov1</option>
          <option value="Depeche Mode">BABYMETAL</option>
          <option value="Coldplay">Hov1</option>
          <option value="Depeche Mode">BABYMETAL</option>
        </select>

        <button className="button" onClick={onStepChange}>
          Next Question
        </button>
      </form>
    );
  } else if (arenaChoice === 'Larger outside venue') {
    return (
      <form>
        <label htmlFor="band-select">
          <h1>These bands are available in your chosen venue: {arenaChoice}</h1>
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
          <option value="Håkan Hellström">BTS</option>
          <option value="Coldplay">Katy Perry</option>
          <option value="Depeche Mode">Depeche Mode</option>
        </select>

        <button className="button" onClick={onStepChange}>
          Next Question
        </button>
      </form>
    );
  }
};

export default ThirdQuestion;
