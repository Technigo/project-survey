import React from 'react';

const MuseumQuestion = ({museum, setMuseum}) => {
    
  const handleMuseumChange = (event) => {
    setMuseum(event.target.value)
  }

  return (
    <>
        <form>
          <label htmlFor="museum-select">
            <h2>Which of these is your favoriture museum?</h2>
          </label>
          <select
            onChange={handleMuseumChange}
            value={museum}
            className="museum-select"
            aria-live="polite"
            >
            <option style={{display: "none"}}>Select a museum</option>
            <option lang="sv" label ="Moderna museet" value="Moderna museet">Moderna museet</option>
            <option lang="sv" label="Vasamuseet" value="Vasamuseet">Vasamuseet</option>
            <option lang="sv" label="Nordiska museet" value="Nordiska museet">Nordiska museet</option>
            <option lang="sv" label="Naturhistoriska museet" value="Naturhistoriska museet">Naturhistoriska museet</option>
            <option lang="sv" label="Sjöhistoriska museet" value="Sjöhistoriska museet">Sjöhistoriska museet</option>
            <option lang="sv" label="Historiska museet" value="Historiska museet">Historiska museet</option>
          </select>
        </form>
      </>
    );
  }

  export default MuseumQuestion