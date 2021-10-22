import React from "react";

const Summary = ({ nameInput, interestInput, ageInput, moodInput }) => {
  return (
    <>
      <h2 className="page-header">Summary</h2>
      <p>
        Welcome {nameInput} to be exactly what you feel like. Life with kids and
        coding is not always the best combination
      </p>
      <p>
        It is nice that you dont hate {interestInput} as much as the other, way
        to go on looking on the bright side of life.{" "}
      </p>
      <p>
        Take your hour to {ageInput} and {moodInput}
      </p>

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
