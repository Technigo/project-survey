import React from 'react';

const Overview = ({ nameInput, destination, fruit }) => {
  return (
    <section>
      <h2>My values from form :</h2>
      <p>Name: {nameInput}</p>
      <p>Preferred destination: {destination}</p>
      <p>Selected fruit: {fruit}</p>
    </section>
  );
};

export default Overview;
