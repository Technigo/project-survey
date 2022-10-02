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
        <label>
          <input type="checkbox" aria-label="First checkbox" value="The Hobbit, or There and Back Again" checked={book === 'The Hobbit, or There and Back Again'} onChange={handleBooksChange} />
        The Hobbit, or There and Back Again
        </label>
        <label>
          <input type="checkbox" aria-label="Second checkbox" value="The Fellowship of the Ring" checked={book === 'The Fellowship of the Ring'} onChange={handleBooksChange} />
            The Fellowship of the Ring
        </label>
        <label>
          <input type="checkbox" aria-label="Third checkbox" value="The Two Towers" checked={book === 'The Two Towers'} onChange={handleBooksChange} />
            The Two Towers
        </label>
        <label>
          <input type="checkbox" aria-label="Fourth checkbox" value="The Return of the King" checked={book === 'The Return of the King'} onChange={handleBooksChange} />
            The Return of the King
        </label>
        <label>
          <input type="checkbox" aria-label="Fifth checkbox" value="The Silmarillion" checked={book === 'The Silmarillion'} onChange={handleBooksChange} />
          The Silmarillion
        </label>
      </div>
    </form>
  );
}