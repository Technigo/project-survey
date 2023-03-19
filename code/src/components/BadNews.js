import React from 'react';

export const BadNews = ({ name, continent }) => {
  return (
    <section className="badNewsClass">
      <h1> <em>Terrible</em> news <mark>{name}</mark> </h1>
      <h1> A zombie <mark>apocalypse</mark>  
        <br />
      is coming to <mark>{continent}</mark> in a month! 
      </h1>
      <h1> Will <em>YOU</em> survive it? </h1>
    </section>
  );
}

