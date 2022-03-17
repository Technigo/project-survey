import React from "react";

const Summary = ({ adjective, identify, coffeeGroup, hangout }) => {
  return (
    <>
      <div className="summary">
        <h1 tabIndex="0" className="summary-heading">
          Oooooh how exciting!
        </h1>
        <p tabIndex="0" className="summary-paragraph">
          You are a {adjective} {identify} who likes {coffeeGroup} {hangout}.
          Yes girl, what a great match! Soon she will be yours!
        </p>
      </div>
      <button
        className="restart-btn"
        type="button"
        onClick={() => window.location.reload()}
      >
        Restart
      </button>
    </>
  );
};

export default Summary;
