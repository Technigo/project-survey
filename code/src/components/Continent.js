import React from 'react';

export const Continent = ({ continent, setContinent, name }) => {
  return (
    <form className="selectContainer" onSubmit={(event) => event.preventDefault()}>
      <section>
        <h1> Where are you <mark>{name}</mark>? </h1>
        <select
          className="select"
          onChange={(event) => setContinent(event.target.value)} 
          value={continent}>
          <option value="">Select continent</option>
          <option value="Europe">Europe</option>
          <option value="Australia">Australia</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Antarctica">Antarctica</option>
        </select>
      </section>
    </form>
  );
}