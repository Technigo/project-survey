import React from "react";

const Summary = ({ name, destination, activity, company, goal }) => {
  return (
    <section aria-label="summary-survey" className="main">
      <h2 className="question">
        Thank you, {name}, for inspiring us with your summer plans!
      </h2>
      <p className="summary">
        You would like to travel to {destination} 🌲 with {company} and enjoy{" "}
        {activity} to achieve {goal}
      </p>
      <h3 className="summary-goodbye">
        We wish you all the best of luck with your trip!
      </h3>
    </section>
  );
};

export default Summary;
