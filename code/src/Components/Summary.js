import React from "react";

const Summary = ({ section, day, time, options, name }) => {
  return (
    <>
      {section === 5 && (
        <>
          <div className="summary-section">
            <h1>Welcome! </h1>

            <p className="summary-text">
              See you at {day} {time} o´clock.You will be arriving by {options}.
              We look forward seeing you there {name}!
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default Summary;
