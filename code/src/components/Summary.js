import React from 'react';

export const Summary = ({ name, oftenTravels, favoriteThing, place, dreamDestination }) => {
  return (
    <section className="summary">
      <h2>Summary of answers:</h2>
      <p>Your name is {name}</p>
      <p>You travel {oftenTravels} times in a year</p>
      <p>Your favorite thing about traveling is {favoriteThing}</p>
      <p>You prefer to travel in the {place} </p>
      <p>Your dream destination is {dreamDestination}</p>

    </section>
  );
}

