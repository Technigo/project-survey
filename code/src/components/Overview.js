import React from "react";

const Overview = ({
  nameInput,
  animalInput,
  bodyInput,
  gameInput,
  pizzaInput,
  outfitInput,
}) => {
  return (
    <section>
      <h2>My values from form:</h2>
      <p>Name: {nameInput}</p>
      <p>Animal: {animalInput}</p>
      <p>
        you would prefer to{" "}
        {bodyInput === "elbow" ? "be without elbows" : "be without knees"}{" "}
        ,ok...good luck with that!
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
        you would rather wear{" "}
        {outfitInput === "pyjamas"
          ? "pyjamas. yes! comfort is king"
          : "a suit. alrigt there fancy pants!"}{" "}
      </p>
    </section>
  );
};

export default Overview;
