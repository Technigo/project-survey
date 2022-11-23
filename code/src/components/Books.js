/* eslint-disable */
import React from 'react';

export const Books = ({ book, setBooks }) => {
  const handleBooksChange = (event) => {
    setBooks(event.target.value);
  }
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <p className="question">Which books would you like to set up on your wishlist?</p>
      <div className="book-selection">
        
      <label htmlFor="first">
          <input className="checkbox-books"
          type="radio" 
          id="lit1" 
          aria-label="First checkbox"
          value="The Hobbit" 
          checked={book === "The Hobbit"} 
          onChange={handleBooksChange} />
          The Hobbit, or There and Back Again
        </label>

        <label htmlFor="second">
          <input className="checkbox-books"
          type="radio" 
          id="lit2" 
          aria-label="Second checkbox"
          value="The Fellowship of the Ring" 
          checked={book === "The Fellowship of the Ring"} 
          onChange={handleBooksChange} />
          The Fellowship of the Ring
        </label>

        <label htmlFor="third">
          <input className="checkbox-books"
          type="radio" 
          id="lit3" 
          aria-label="Third checkbox"
          value="The Two Towers" 
          checked={book === "The Two Towers"} 
          onChange={handleBooksChange} />
            The Two Towers
        </label>

        <label htmlFor="fourth">
          <input className="checkbox-books"
          type="radio" 
          id="lit4" 
          aria-label="Fourth checkbox"
          value="Return of the King" 
          checked={book === "Return of the King"} 
          onChange={handleBooksChange} />
          The Return of the King
        </label>

        <label htmlFor="fifth">
          <input className="checkbox-books"
          type="radio" 
          id="lit5" 
          aria-label="Fifth checkbox"
          value="The Silmarillion" 
          checked={book === "The Silmarillion"} 
          onChange={handleBooksChange} />
          The Silmarillion
        </label>

      </div>
    </form>
  );
}