import React from "react";
import "./Overview.css";

const Overview = ({ nameInput, surnameInput, ageGroup, believesInput }) => {
  return (
    <section className="container">
      <h2>Summary</h2>
      <p>Name: {nameInput}</p>
      <p>Surname: {surnameInput}</p>
      <p>Age: {ageGroup}</p>
      <p>Do you believe there's life on another planet? - {believesInput}</p>
    </section>
  );
};

export default Overview;
