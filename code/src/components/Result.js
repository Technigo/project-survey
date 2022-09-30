import React from 'react';

const Result = ({ userName, coolestThing, perfectJob, fondness }) => {
  return (
    <>
      <p>Alright {userName}, here is how you answered.</p>
      <p>You think the coolest thing about them is: {coolestThing}</p>
      <p>The perfect human job for them would be: {perfectJob}</p>
      <p>On a scale of 0-10, you love them is much: {fondness}</p>
    </>
  );
}

export default Result;