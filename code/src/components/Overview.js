import React from "react";

const Overview = ({ nameInput, surnameInput, ageGroup, believesInput }) => {
  return (
    <section>
      <h2>Summary</h2>
      <p>Name: {nameInput}</p>
      <p>Surname: {surnameInput}</p>
      <p>Age: {ageGroup}</p>
      <p>Do you believe there's life on another planet? - {believesInput}</p>
    </section>
  );
};

export default Overview;
