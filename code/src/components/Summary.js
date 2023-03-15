import React from 'react';

export const Summary = ({ self, holiday, destination, sauce }) => {
  return (
    <>
      <h2>Summary Page</h2>
      <p>I consider myself to be {self}.</p>
      <p>You will always find me {holiday}. Preferably {destination}</p>
      {sauce === '1' && (
        <p>Hot sauce!</p>
      )}
      {sauce === '2' && (
        <p>Ew!</p>
      )}
      {sauce === '3' && (
        <p>Mayo!</p>
      )}
    </>
  )
}