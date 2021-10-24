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
          It is nice that you dont hate {interestInput} as much as the other
          stuff, way to go on looking on the bright side of life.
        </p>
        <p>
          {ageInput} on your free hour and you will feel more than {moodInput}
          about you know what 😜 !
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
