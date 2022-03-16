import React from "react";

const Summary = ({ name, destination, activity, company, goal }) => {
  return (
    <section aria-label="summary-survey" className="overview-container">
      <h2 className="summary-header">
        Thank you, {name}, for inspiring us with your travel plans!
      </h2>
      <h2 className="summary-subheader">Here are your answers:</h2>
      <p className="summary">
        You would like to travel to {destination} 🌲 with {company} and enjoy{" "}
        {activity} to achieve {goal}
      </p>
      <h3 className="summary-goodbye">Best of luck!</h3>
    </section>
  );
};

export default Summary;
