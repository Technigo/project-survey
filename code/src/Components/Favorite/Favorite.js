/// ////////// IMPORTS //////////////// ///

import React from 'react';
import './Favorite.css';

/// ////////// FUNCTION //////////////// ///

export const Favorite = ({ favorite, setFavorite }) => {
  const handleFavoriteChange = (event) => {
    setFavorite(event.target.value);
  }
  return (
    <label htmlFor="favorite-wine">
      <h1 title="Enter wine" className="nametext">FAVORITE WINE?</h1>
      <input
        id="favorite-wine"
        className="name-input"
        type="text"
        value={favorite}
        onChange={handleFavoriteChange}
        aria-label="Favorite wine"
        required />
    </label>
  );
};