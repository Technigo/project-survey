import React from 'react';

export const Summary = ({ name, noOfConcerts, favoriteArtist }) => {
  return (
    <>
      <p>Your name is {name}</p>
      <p>You visit {noOfConcerts} concerts in a year</p>
      <p>In you next concert you want yo see {favoriteArtist}</p>
    </>
  );
}