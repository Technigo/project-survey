import React from "react";
import Tank from "./Tank";
import Healer from "./Healer";
import Ranged from "./Ranged";
import Melee from "./Melee";

const ThirdQuestion = ({ roleInput, onStepChange }) => {
  return (
    <section className="form-container" tabIndex="0">
      <label className="label-text" htmlFor="classInput">
        What class are you or will you be playing?
      </label>

      {roleInput === "Tank" && <Tank />}

      {roleInput === "Healer" && <Healer />}

      {roleInput === "Ranged" && <Ranged />}

      {roleInput === "Melee" && <Melee />}

      <button type="submit" onClick={onStepChange}>
        See overview
      </button>
    </section>
  );
};

export default ThirdQuestion;
