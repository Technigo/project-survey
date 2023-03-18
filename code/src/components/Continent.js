import React from 'react';

export const Continent = ({ continent, setContinent, name }) => {
  return (
    <>
      <h1> Where are you {name}? </h1>
      <form>
        <label htmlFor="asia">
          <input type="radio" id="asia" value={continent} onChange={(event) => setContinent(event.target.value)} checked />
        </label>
      </form>
    </>

  /* <section>
    Asia, Africa, North America, South America, Antarctica, Europe, and Australia
    <input id="continent" value={continent} onChange={(event) => setContinent(event.target.value)} required />
    </section>
    */
  );
}