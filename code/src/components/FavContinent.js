/* eslint-disable linebreak-style */
import React from 'react';

export const FavContinent = ({ favContinent, setFavContinent }) => {
  const handleFavContinentChange = (event) => {
    setFavContinent(event.target.value);
  }
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <h3>What is your dates favourite continent?</h3>
      <select
        onChange={handleFavContinentChange}
        value={favContinent}>
        <option value=""> Select a continent</option>
        <option value="Asia"> Asia</option>
        <option value="Africa"> Africa</option>
        <option value="Europe"> Europe</option>
        <option value="South America"> South America</option>
        <option value="North America"> North America</option>
        <option value="Oceania"> Oceania</option>
      </select>
    </form>
  );
}
