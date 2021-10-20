import React from "react";
import "./summary.css";

const Summary = ({ name, drink, tagline, bravo }) => {
  return (
    <section className="summarybox">
      <h2>the result is : </h2>
      <p>Name : {name}</p>
      <p>Drink of choice : {drink}</p>
      <p>Your tagline : {tagline}</p>
      <p>Your mentor : {bravo}</p>
    </section>
  );
};

export default Summary;
