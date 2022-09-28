import React from 'react';

export const Summary = ({ name, home, lenght, bike, want }) => {
  return (
    <>
      <p>Your name is {name}.</p>
      <p>You live {home}.</p>
      <p>Your commute to work or school is about {lenght} long.</p>
      <p>Do you have a bike to use? {bike}</p>
      <p>Your desire to use a bike more is a {want} on a scale from 1-10.</p>
    </>
  );
}