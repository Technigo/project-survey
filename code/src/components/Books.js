import React from 'react';


export const Books = ({ book, setBooks}) => {
    const handleBooksChange = (event) => {
        setBooks(event.target.value);
    }
    return (
        <form onSubmit={event => event.preventDefault()}>
        <p>Which books would you like to set up on your wishlist?</p>
        <label> 
        <input type="checkbox" name="titles" value="Bilbo" checked={book === "Bilbo"} onChange={handleBooksChange} />
        The Hobbit, or There and Back Again
        </label>
        <label>
            <input type="checkbox" name="titles" value="Fellowship" checked={book === "Fellowship"} onChange={handleBooksChange} />
            The Fellowship of the Ring
        </label>
        <label>
            <input type="checkbox" name="titles" value="Towers" checked={book === "Towers"} onChange={handleBooksChange} />
            The Two Towers
        </label>
        </form> 
    );
}