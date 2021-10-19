import React from "react";
import { useState } from "react";
import ImageComponent from "./FirstImg";

// lägg till en key till labels, den ska läggas in på "checked" istället för {userWatches === "yes"}?

const FirstQuestion = () => {
  const [userWatches, setUserWatches] = useState("");
  return (
    <div className="QuestionContainer">
      <p>Do you watch Rupaul's Drag Race?</p>
      <div className="radioForm">
        <form onSubmit={(event) => event.preventDefault()}>
          <label>
            <input
              type="radio"
              value="yes"
              onChange={(event) => setUserWatches(event.target.value)}
              checked={userWatches === "yes"}
            />
            Yes!
          </label>
          <label>
            <input
              type="radio"
              value="no"
              onChange={(event) => setUserWatches(event.target.value)}
              checked={userWatches === "no"}
            />
            No, I have bad taste.
          </label>
        </form>
      </div>
      <ImageComponent />
    </div>
  );
};

export default FirstQuestion;
