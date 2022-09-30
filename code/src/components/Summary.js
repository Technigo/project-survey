import React from 'react';

export const Summary = ({ name, noOfConcerts, genre, place, favoriteArtist }) => {
  return (
    <section className="summary">
      <h2>Summary of answers:</h2>
      <p>Your name is {name}</p>
      <p>You visit {noOfConcerts} concerts in a year</p>
      <p>Your favorite concert genre is {genre}</p>
      <p>You like to go to an {place} concert</p>
      <p>In you next concert you want yo see {favoriteArtist}</p>
    </section>
  );
}