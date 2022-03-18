import React from "react";

const SubmittedView = ({ answers, reset }) => {
  return (
    <section className="container">
      <h2>
        Awesome! For our next dinner party, we'll make sure to design a menu around the following
        preferences:{" "}
      </h2>
      {answers.map((answer, i) => (
        <li key={i}>{answer}</li>
      ))}
      <button onClick={reset}>Reset</button>
    </section>
  );
};

export default SubmittedView;
