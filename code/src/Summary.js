import React from "react";

const Summary = ({ name, training, city, experience }) => {
  return (
    <section className="summary" aria-labelledby="summary">
      <h1>Summary</h1>
      <h3>
        You have choosen to train {training} in {city}
      </h3>
      <h3>You will start in the {experience} group</h3>
      <h4>Information will be sent to {name}</h4>
    </section>
  );
};
export default Summary;
