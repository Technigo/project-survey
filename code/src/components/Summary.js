import React from "react";
import "./Summary.css";

const Summary = ({ nameInput, interestInput, ageInput, moodInput }) => {
  return (
    <>
      <h2 className="page-header">Summary</h2>
      <article className="summary-text">
        <p>
          Welcome {nameInput} to be exactly what you feel like. Life with kids
          and coding is not always the best combination
        </p>
        <p>
          It is nice that you dont hate {interestInput} as much as the other,
          way to go on looking on the bright side of life.{" "}
        </p>
        <p>
          Take your hour to {ageInput} and {moodInput}
        </p>
      </article>

      <button
        onClick={() => window.location.reload(false)}
        type="button"
        className="link-button"
      >
        Lets do it one more time
      </button>
    </>
  );
};

export default Summary;
