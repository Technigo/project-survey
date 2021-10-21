import React from "react";

const Overview = ({
  nameInput,
  animalInput,
  astleyInput,
  gameInput,
  pizzaInput,
  mathInput,
}) => {
  return (
    <section>
      <h2>My values from form:</h2>
      <p>Name: {nameInput}</p>
      <p>
        Animal:{" "}
        {animalInput === "elephant"
          ? "good luck with that"
          : "that's one giant duck"}
      </p>
      <p>
        {" "}
        {astleyInput === "all-above"
          ? "correct! He's a real dreamboat that one"
          : "maybe you need to hear it again"}{" "}
      </p>
      <p>
        you would prefer to{" "}
        {gameInput === "inside"
          ? "be trapped inside"
          : "have the game come to life"}{" "}
        ,fun!
      </p>
      <p>
        you would{" "}
        {pizzaInput === "yes"
          ? "wow, you must really love pizza!"
          : "not. Fair enough, can't say we blame you"}{" "}
      </p>
      <p>
        {" "}
        {mathInput === "c"
          ? "phew"
          : "sorry, that was meant to be a mental break"}{" "}
      </p>
    </section>
  );
};

export default Overview;
