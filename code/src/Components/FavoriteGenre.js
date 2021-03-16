import React, {useState} from 'react';



/*RADIO BUTTONS*/

const bookGenre = ["Biography", "Romance", "Fantacy", "Detective novel"]

const FavoriteGenre = ({text}) => {
  const [genre, setGenre] = useState("")

  return (
    <div className="favorite-genre-container">
      <div className="inner-container">
        <div><h2>{text}</h2></div>
          {bookGenre.map((genre) => (
          <label key={genre}>
            <input
            type="radio"
            name="test"
            value={genre}
            onChange={(event) => setGenre(event.target.value)}
            // checked={bookGenre === genre}
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