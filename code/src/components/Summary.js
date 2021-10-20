import React from "react";

const Summary = ({ name, drink, tagline, bravo }) => {
  return (
    <section>
      <h2>the result is : </h2>
      <p>Name : {name}</p>
      <p>Drink of choice : {drink}</p>
      <p>Your tagline : {tagline}</p>
      <p>Your mentor : {bravo}</p>
    </section>
  );
};

export default Summary;
