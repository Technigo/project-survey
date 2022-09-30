import React from 'react';
import { Button } from 'components/Button';

export const FavoriteArtist = ({ favoriteArtist, setFavoriteArtist }) => {
  const handleFavoriteArtist = (event) => {
    setFavoriteArtist(event.target.value)
  }
  return (
    <>
      <p>Which artist do you want to see in your next concert?</p>
      <label htmlFor="favoriteArtist">
        <input id="favoriteArtist" type="text" value={favoriteArtist} onChange={handleFavoriteArtist} required />
      </label>
      <Button button="Summary" />
    </>
  );
}