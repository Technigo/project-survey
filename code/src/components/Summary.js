import React from 'react';

export const Summary = ({ name, noOfConcerts, place, favoriteArtist }) => {
  return (
    <>
      <p>Your name is {name}</p>
      <p>You visit {noOfConcerts} concerts in a year</p>
      <p>You like to to on an {place} concert</p>
      <p>In you next concert you want yo see {favoriteArtist}</p>
    </>
  );
}