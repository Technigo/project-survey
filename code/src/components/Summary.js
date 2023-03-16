import React from 'react';

export const Summary = ({ name, oftenTravels, favoriteThing, place, dreamDestination }) => {
  return (
    <section className="summary">
      <h2>Summary of answers:</h2>
      <p>Your name is {name}</p>
      <p>You traveled {oftenTravels} in a year</p>
      <p>Your favorite music genre is {favoriteThing}</p>
      <p>You prefer to travel in the {place} </p>
      <p>Your dream destination is {dreamDestination}</p>

    </section>
  );
}

