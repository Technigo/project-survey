import React from "react";

const Summary = ({ adjective, identify, coffeeGroup, hangout }) => {
  return (
    <>
      <div className="summary">
        <h1 tabIndex="0" className="summary-heading">
          Oooooh how exciting!
        </h1>
        <p tabIndex="0" className="summary-paragraph">
          You are a{" "}
          <b>
            {adjective} {identify}
          </b>{" "}
          who likes{" "}
          <b>
            {coffeeGroup} {hangout}
          </b>
          . Yes girl, what a great match! We have the perfect person for you,
          stay tuned and we will connect you to her.
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
