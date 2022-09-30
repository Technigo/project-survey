import React from 'react';

const Result = ({ name, coolestThing, perfectJob, fondness }) => {
  return (
    <>
      <p>Alright {name}, here is how you answered.</p>
      <p>You think the coolest thing about them is: {coolestThing}</p>
      <p>The perfect human job for them would be: {perfectJob}</p>
      <p>You love them this much: {fondness}</p>
    </>
  );
}

export default Result;