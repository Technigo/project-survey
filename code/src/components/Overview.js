import React from "react";

const Overview = ({ nameInput, surnameInput }) => {
  return (
    <section>
      <h2>My values from form:</h2>
      <p>Name: {nameInput}</p>
      <p>Surname: {surnameInput}</p>
    </section>
  );
};

export default Overview;
