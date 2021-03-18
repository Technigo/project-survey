import React from "react";

import { SubQuestion } from "./SubQuestion";

export const ToggleSubQuestions = ({
  futureChoice,
  moreFutureChoices,
  setMoreFutureChoices,
}) => {
  return (
    <>
      {futureChoice === "synthetic food" && (
        <SubQuestion
          boxArray={["taste", "looks", "annd", "flick"]}
          setMoreFutureChoices={setMoreFutureChoices}
          moreFutureChoices={moreFutureChoices}
        />
      )}
      {futureChoice === "flying cars" && (
        <SubQuestion
          boxArray={["taste", "looks"]}
          setMoreFutureChoices={setMoreFutureChoices}
          moreFutureChoices={moreFutureChoices}
        />
      )}

      {futureChoice === "cyborg society" && (
        <SubQuestion
          boxArray={["taste", "looks"]}
          setMoreFutureChoices={setMoreFutureChoices}
          moreFutureChoices={moreFutureChoices}
        />
      )}

      {futureChoice === "cool gadgets" && (
        <SubQuestion
          boxArray={["taste", "looks"]}
          setMoreFutureChoices={setMoreFutureChoices}
          moreFutureChoices={moreFutureChoices}
        />
      )}
    </>
  );
};
