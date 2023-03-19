import React from 'react';

const Favoriteplace = ({ favoriteplace, setFavoriteplace }) => {
  const handleFavoriteplaceChange = (event) => {
    setFavoriteplace(event.target.value);
  }
  return (
    <label htmlFor="favoriteplace" className="favoriteplace-label">
      <p>What is your favorite place/surrounding?</p>
      <br />
      <input
        type="radio"
        name="favoriteplace"
        value="Forest"
        onChange={(e) => setFavoriteplace(e.target.value)}
        required />
        Forest
      <br />
      <br />
      <input
        type="radio"
        name="favoriteplace"
        value="Sea"
        onChange={(e) => setFavoriteplace(e.target.value)}
        required />
        By the sea
      <br />
      <br />
      <input
        type="radio"
        name="favoriteplace"
        value="City"
        onChange={(e) => setFavoriteplace(e.target.value)}
        required />
        In the city
      <br />
      <input
        id="favoriteplace"
        value={favoriteplace}
        onChange={handleFavoriteplaceChange}
        readOnly
        className="input-field" />
    </label>
  )
}

export default Favoriteplace;