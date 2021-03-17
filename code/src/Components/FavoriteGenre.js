import React, {useState} from 'react';



/*RADIO BUTTONS*/

const bookGenre = ["Biography", "Romance", "Fantacy", "Detective"]

const FavoriteGenre = ({text}) => {
  const [favoriteGenre, setFavoriteGenre] = useState("")

  return (
    <div className="favorite-genre-container">
      <div className="inner-container">
        <div><h2>{text}</h2></div>
          {bookGenre.map((genre) => (
          <label key={genre}>
            <input
            className="label-radio"
            type="radio"
            name="test"
            value={genre}
            onChange={(event) => setFavoriteGenre(event.target.value)}
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