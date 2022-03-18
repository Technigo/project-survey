import React from "react";
import "./SubmittedView.css";

const SubmittedView = ({ answers, reset }) => {
  return (
    <section className="container">
      <h2>Awesome! Our next dinner party will be designed around your preferences: </h2>
      <ul>
        {answers.map((answer, i) => (
          <li key={i}>{answer}</li>
        ))}
      </ul>
      <button onClick={reset}>Reset</button>
    </section>
  );
};

export default SubmittedView;
