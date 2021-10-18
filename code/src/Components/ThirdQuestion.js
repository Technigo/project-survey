import React from "react";
import { useState } from "react";

const ThirdQuestion = () => {
  const [experience, setExperience] = useState("");
  return (
    <div className="QuestionContainer">
      <p className="textQuestion">How much coding experience do you have?</p>
      <form className="formRadio">
        <label>
          Beginner
          <input
            type="radio"
            value="beginner"
            onChange={(event) => setExperience(event.target.value)}
            checked={experience === "beginner"}
          />
        </label>
        <label>
          Intermediate
          <input
            type="radio"
            value="intermediate"
            onChange={(event) => setExperience(event.target.value)}
            checked={experience === "intermediate"}
          />
        </label>
        <label>
          Advanced
          <input
            type="radio"
            value="advanced"
            onChange={(event) => setExperience(event.target.value)}
            checked={experience === "advanced"}
          />
        </label>
      </form>
    </div>
  );
};

export default ThirdQuestion;
