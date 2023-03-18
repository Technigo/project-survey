import React from 'react';

export const Continent = ({ continent, setContinent, name }) => {
  return (
    <>
      <h1> Where are you {name}? </h1>
      <form onSubmit={(event) => event.precentDefault()}>
        <select onChange={(event) => setContinent(event.target.value)} value={continent}>
          <option value="">Select continent</option>
          <option value="Europe">Europe</option>
          <option value="Australia">Australia</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Antarctica">Antarctica</option>
        </select>
      </form>
    </>
  );
}