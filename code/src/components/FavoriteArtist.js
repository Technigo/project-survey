import React from 'react';
import { Button } from 'components/Button';

export const FavoriteArtist = ({ favoriteArtist, setFavoriteArtist }) => {
  const handleFavoriteArtist = (event) => {
    setFavoriteArtist(event.target.value)
  }
  return (
    <>
      <p>Which artist do you want to the next time you go to a concert?</p>
      <label htmlFor="favoriteArtist">
        <input id="favoriteArtist" type="text" value={favoriteArtist} onChange={handleFavoriteArtist} required />
      </label>
      <Button button="Summary" />
    </>
  );
}