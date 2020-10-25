import React from 'react';

import '../style/checkbox.css'

export const Checkbox = ({ musicGenre, setMusicGenre, askQuestion, musicGenreArray }) => {

  return (
    <div className="question-container">
      <h2>{askQuestion}</h2>
      {musicGenreArray.map(item => (

        <label key={item} className="checkboxes" htmlFor={item}>{item}
          <input 
            id={item}
            type="checkbox"
            value={item}
            checked={musicGenre}
            onChange={event => setMusicGenre(event.target.checked)}
          />
        </label>
      ))}
    </div>
  );
};
