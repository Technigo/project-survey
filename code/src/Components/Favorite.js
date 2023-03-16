import React from 'react';

export const Favorite = ({ favorite, setFavorite }) => {
  const handleFavoriteChange = (event) => {
    setFavorite(event.target.value);
  }
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <h1 className="nametext">FAVORITE WINE?</h1>
      <input
        id="favorite-wine"
        className="name-input"
        type="text"
        value={favorite}
        onChange={handleFavoriteChange}
        required
        aria-label="Enter your favorite wine" />
    </form>
  );
};