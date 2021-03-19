import React from 'react';


const FavoriteBook = ({text, book, onBookChange}) => {

  return (

    <div className="favorite-book-container">
      <div className="inner-container">
        <label htmlFor='favoritebook'><h2 tabIndex="0">{text}</h2>
        <input
          id="favoritebook"
          type="text"
          onChange={onBookChange}
          value={book}

        />
        </label>
      </div>
      <div>
        <button className="start-button" type='submit'>
         Finish!</button>
      </div>
    </div>

  )
};


export default FavoriteBook;