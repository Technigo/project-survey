import React from 'react';

export const BadNews = ({ name, continent }) => {
  return (
    <section>
      <h1> TERRIBLE NEWS {name} </h1>
      <h2> A zombie apocalypse is coming to {continent} on the (today+1 month) </h2>
      <h3> Will you survive it? </h3>
    </section>
  );
}