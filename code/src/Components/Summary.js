import React from "react";

const Summary = ({ section, day, time, options, name }) => {
  return (
    <>
      {section === 5 && (
        <>
          <div className="summary-section">
            <h2 className="headertext">
              Can´t wait to Wine and Dine with you {name}! We look forward
              seeing you in {options} next {day} {time}.
            </h2>
          </div>
        </>
      )}
    </>
  );
};

export default Summary;
