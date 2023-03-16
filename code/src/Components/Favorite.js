import React from 'react';

export const Favorite = ({ favorite, setFavorite }) => {
  const handleFavoriteChange = (event) => {
    setFavorite(event.target.value);
  }
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <h1 title="Enter wine" className="nametext">FAVORITE WINE?</h1>
      <input
        id="favorite-wine"
        className="name-input"
        type="text"
        value={favorite}
        onChange={handleFavoriteChange}
        aria-label="Favorite wine"
        required />
    </form>
  );
};