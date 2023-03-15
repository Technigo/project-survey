import React from 'react';

export const Favorite = ({ favorite, setFavorite }) => {
  const handleFavoriteChange = (event) => {
    setFavorite(event.target.value);
  }
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <h1 className="nametext">Favorite wine?</h1>
      <input
        className="name-input"
        type="text"
        value={favorite}
        onChange={handleFavoriteChange}
        required />
    </form>
  );
};