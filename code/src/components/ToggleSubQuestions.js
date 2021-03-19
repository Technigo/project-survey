import React from "react";

import { SubQuestion } from "./SubQuestion";

export const ToggleSubQuestions = ({
  futureChoice,
  moreFutureChoices,
  setMoreFutureChoices,
}) => {
  const arrayInput = () => {
    switch (futureChoice) {
      case "synthetic food":
        return [
          "new tastes",
          "wierd looks",
          "vegan friendly choices",
          "diversity",
          "stuff not mentioned here",
        ];
      case "flying cars":
        return [
          "speed",
          "altitude",
          "neon lights",
          "sparse traffic",
          "stuff not mentioned here",
        ];
      case "cyborg society":
        return [
          "chance to become one",
          "productivity",
          "equality",
          "shinyness",
          "stuff not mentioned here",
        ];
      default:
        return [
          "everyday help",
          "looks",
          "easy access to information",
          "uneccessary functions",
          "stuff not mentioned here",
        ];
    }
  };

  return (
    <>
      <h3>What are you most excited for about {futureChoice}?</h3>
      <SubQuestion
        boxArray={arrayInput()}
        setMoreFutureChoices={setMoreFutureChoices}
        moreFutureChoices={moreFutureChoices}
      />
    </>
  );
};
