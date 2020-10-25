import React from "react";

const Summary = ({ name, training, city }) => {
  return (
    <section className="summary">
      <h1>Summary</h1>
      <h3>
        You have choosen to train {training} in {city}
      </h3>

      <h4>Information will be sent to {name}</h4>
    </section>
  );
};
export default Summary;
