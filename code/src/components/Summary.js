import React from 'react';

export const Summary = ({ self, holiday, destination, sauce, region, flavor, season }) => {
  return (
    <>
      <h2>Your Summary</h2>
      <p>Does this all look right?</p>
      <p>I consider myself to be {self}.</p>
      <p>You will always find me {holiday}. Preferably {destination}</p>
      {sauce === '0' && (
        <p>I shall not select a sauce!</p>
      )}
      {sauce === '1' && (
        <p>I prefer hot sauce over mayo any day.</p>
      )}
      {sauce === '2' && (
        <p>I prefer mayo over hot sauce any day.</p>
      )}
      {sauce === '3' && (
        <p>Ew! Neither hot sauce nor mayo, thanks.</p>
      )}
      <p>My closest friends consider me to be {region}.</p>
      <p>My finest acquaintances consider me to be {flavor}.</p>
      <p>I am my best self in {season}.</p>
    </>
  )
}