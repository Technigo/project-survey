import React from 'react';

import {bookGenre} from '../utils/bookGenre'


/*RADIO BUTTONS*/


const FavoriteGenre = ({text, favoriteGenre, onGenreChange}) => {

  return (
    <div className="favorite-genre-container">
      <div className="inner-container">

        <div><h2 tabIndex="0">{text}</h2></div>

          {bookGenre.map((genre) => (
          <label key={genre}>
            <input
              className="label-radio"
              type="radio"
              name="genre"
              value={genre}
              onChange={onGenreChange}
              checked={favoriteGenre === genre}

            />
            {genre}
          </label>
          ))}
        </div>
         <div>
          <button className="start-button"><a href='#favorite'>Next</a></button>
         </div>
    </div>

  )
}


export default FavoriteGenre;