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
            value={museum}>
              <option value="Moderna museet">Select museum</option> 
              {/* Make the option above not possible to choose */}
              <option value="Moderna museet">Moderna museet</option>
              <option value="Vasamuseet">Vasamuseet</option>
              <option value="Noriska museet">Noriska museet</option>
              <option value="Naturhistoriska museet">Naturhistoriska museet</option>
              <option value="Sjöhistoriska museet">Sjöhistoriska museet</option>
              <option value="Historiska museet">Historiska museet</option>
            </select>
        </form>

    );
  }

  export default MuseumQuestion