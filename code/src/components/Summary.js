import React from 'react';

export const Summary = ({ name, noOfConcerts, genre, place, favoriteArtist }) => {
  return (
    <section className="summary">
      <h2>Summary of answers:</h2>
      <p>Your name is {name}</p>
      <p>You visit {noOfConcerts} concerts in a year</p>
      <p>Your favorite music genre is {genre}</p>
      <p>You prefer to visit an {place} concert</p>
      <p>In your next concert you want to see {favoriteArtist}</p>
    </section>
  );
}