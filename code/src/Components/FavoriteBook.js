import React, {useState} from 'react';


const FavoriteBook = ({text}) => {
  const [book, setBook] = useState("");

  const onBookChange = (event) => {
    setBook(event.target.value)
  }

  return (

    <div className="favorite-book-container">
      <div className="inner-container">
        <label htmlFor='favoritebook'><h2>{text}</h2>
        <input
          type="text"
          onChange={onBookChange}
          value={book}
        />
        </label>
      </div>
      <div>
        <button className="start-button"><a href='#favorite'>Next</a></button>
      </div>
    </div>

  )
};


export default FavoriteBook;