import React from 'react';

export const FavoriteArtist = ({ favoriteArtist, setFavoriteArtist }) => {
  const handleFavoriteArtist = (event) => {
    setFavoriteArtist(event.target.value)
  }
  return (
    <form>
      <p>Which artist do you want to see in your next concert?</p>
      <input type="text" value={favoriteArtist} onChange={handleFavoriteArtist} />
    </form>
  );
}