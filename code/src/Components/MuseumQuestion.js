import React from 'react';

const MuseumQuestion = ({museum, setMuseum}) => {
    
  const handleMuseumChange = (event) => {
    setMuseum(event.target.value)
  }

  return (
        <form>
           <h2>Which of these is your favoriture museum?</h2>
          <select
            onChange={handleMuseumChange}
            value={museum}
            className="museum-select"
            >
            <option style={{display: "none"}}>Select a museum</option>
            <option value="Moderna museet">Moderna museet</option>
            <option value="Vasamuseet">Vasamuseet</option>
            <option value="Nordiska museet">Nordiska museet</option>
            <option value="Naturhistoriska museet">Naturhistoriska museet</option>
            <option value="Sjöhistoriska museet">Sjöhistoriska museet</option>
            <option value="Historiska museet">Historiska museet</option>
          </select>
        </form>

    );
  }

  export default MuseumQuestion