import React from "react";
import { useState } from "react";
import ImageComponent from "./FirstImg";

const FirstQuestion = () => {
  const [experience, setExperience] = useState(""); // change the name here
  return (
    <div className="QuestionContainer">
      <p>Do you watch Rupaul's Drag Race?</p>
      <div className="radioForm">
        <form>
          <label>
            Yes
            <input
              type="radio"
              value="yes"
              onChange={(event) => setExperience(event.target.value)}
              checked={experience === "yes"}
            />
          </label>
          <label>
            No I have bad taste
            <input
              type="radio"
              value="no"
              onChange={(event) => setExperience(event.target.value)}
              checked={experience === "no"}
            />
          </label>
        </form>
      </div>
      <div>
        <ImageComponent />
      </div>
    </div>
  );
};

export default FirstQuestion;
