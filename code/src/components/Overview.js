import React from "react";

const Overview = ({
  // onStepChange,
  nameInput,
  surnameInput,
  candyInput,
  creatureInput,

  // onCreatureInputChange,
}) => {
  return (
    <div>
      <section>
        <h2>Your summary:</h2>
        <p>Name: {nameInput}</p>
        <p>Surname: {surnameInput}</p>
        <p>Favourite candy:{candyInput}</p>
        <p>
          Favourite night creature:
          {creatureInput}
        </p>
        <button className="btn" onClick={() => window.location.reload(false)}>
          Start over{" "}
          <span role="img" aria-label="ghost">
            👻{" "}
          </span>{" "}
        </button>
      </section>
    </div>
  );
};

export default Overview;
