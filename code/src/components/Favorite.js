/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Favorite = ({ favorite, setFavorite }) => {
  const handleFavoriteChange = (event) => {
    setFavorite(event.target.value)
  }

  return (
    <div>
      <label htmlFor="favorite">Who is your favorite cartoon cat?</label>
      <div>
        <label htmlFor="garfield">
          <input
            id="garfield"
            type="radio"
            value="Garfield"
            onChange={handleFavoriteChange}
            checked={favorite === 'Garfield'}
            aria-label="garfield" />
    Garfield
        </label>
        <label htmlFor="chesire cat">
          <input
            id="chesire cat"
            type="radio"
            value="Chesire Cat"
            onChange={handleFavoriteChange}
            checked={favorite === 'Chesire Cat'}
            aria-label="chesire cat" />
    Chesire Cat
        </label>
        <label htmlFor="puss in boots">
          <input
            id="puss in boots"
            type="radio"
            value="Puss in Boots"
            onChange={handleFavoriteChange}
            checked={favorite === 'Puss in Boots'}
            aria-label="puss in boots" />
    Puss in Boots
        </label>
        <label htmlFor="snowball">
          <input
            id="snowball"
            type="radio"
            value="Snowball"
            onChange={handleFavoriteChange}
            checked={favorite === 'Snowball'}
            aria-label="snowball" />
    Snowball
        </label>
        <label htmlFor="hello kitty">
          <input
            id="hello kitty"
            type="radio"
            value="Hello Kitty"
            onChange={handleFavoriteChange}
            checked={favorite === 'Hello Kitty'}
            aria-label="hello kitty" />
    Hello Kitty
        </label>
        <label htmlFor="tom">
          <input
            id="tom"
            type="radio"
            value="Tom"
            onChange={handleFavoriteChange}
            checked={favorite === 'Tom'}
            aria-label="tom" />
    Tom
        </label>
        <label htmlFor="tony the tiger">
          <input
            id="tony the tiger"
            type="radio"
            value="Tony the Tiger"
            onChange={handleFavoriteChange}
            checked={favorite === 'Tony the Tiger'}
            aria-label="tony the tiger" />
    Tony the Tiger
        </label>
        <label htmlFor="hobbes">
          <input
            id="hobbes"
            type="radio"
            value="Hobbes"
            onChange={handleFavoriteChange}
            checked={favorite === 'Hobbes'}
            aria-label="hobbes" />
   Hobbes
        </label>
      </div>
    </div>
  );
}

export default Favorite;