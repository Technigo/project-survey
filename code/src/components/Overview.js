import React from 'react';

const Overview = ({ nameInput, plantSkill, humidity, favouritePlant }) => {
  return (
    <section>
      <h2>My values from form :</h2>
      <p>Name: {nameInput}</p>
      <p>Plant skills: {plantSkill}</p>
      <p>Indoor humidity: {humidity}</p>
      <p>Favourite plant: {favouritePlant}</p>
    </section>
  );
};

export default Overview;
