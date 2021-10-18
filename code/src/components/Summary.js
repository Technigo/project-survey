import React from "react";

const Summary = ({ nameInput, punInput, dropdown }) => {
  return (
    <section>
      <p> name: {nameInput}</p>
      <p> favorite pun: {punInput}</p>
      <p> dropdown: {dropdown}</p>
    </section>
  );
};

export default Summary;
