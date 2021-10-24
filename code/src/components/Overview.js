import React from "react";

const Overview = ({ nameInput, surnameInput, candyInput, creatureInput }) => {
  return (
    <div>
      <section className="summary">
        <h2 className="summary-h2">Your summary:</h2>
        <p>Name: {nameInput}</p>
        <p>Surname: {surnameInput}</p>
        <p>Favourite candy:{candyInput}</p>
        <p>
          Favourite creature:
          {creatureInput}
        </p>
        <button className="btn" onClick={() => window.location.reload(false)}>
          START OVER{" "}
          <span role="img" aria-label="ghost">
            👻{" "}
          </span>{" "}
        </button>
      </section>
    </div>
  );
};

export default Overview;
