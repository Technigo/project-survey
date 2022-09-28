import React from 'react';

export const Result = ({ name, whyCute, perfectJob, fondness }) => {
  return (
    <>
      <p>Alright {name}, here is how you answered.</p>
      <p>You think the cutest thing about Borzois is: {whyCute}</p>
      <p>The perfect human job for them would be: {perfectJob}</p>
      <p>You love them this much: {fondness}</p>
    </>
  );
}