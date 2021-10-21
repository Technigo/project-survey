import React from "react";

const Overview = ({ nameInput, secretnameInput, themeInput, lifeInput }) => {
  return (
    <section>
      <h2>My values from form: </h2>
      <p>Name : {nameInput}</p>
      <p>Hero Name : {secretnameInput}</p>
      <p>Theme Song : {themeInput}</p>
      <p>Lifes saved : {lifeInput}</p>
    </section>
  );
};

export default Overview;
