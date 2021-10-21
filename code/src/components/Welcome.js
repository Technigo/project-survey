import React from "react";
import AnimatedTextSpring from "./AnimatedTextSpring";

export const Welcome = ({ moveOn }) => {
  return (
    <div className="container text">
      <div className="card welcome">
        <div className="welcome-header-container">
          <h1 className="welcome-header">
            WAVES
            <AnimatedTextSpring />
          </h1>
        </div>
        <p className="greetings">Thank you for shopping with us!</p>
        <p className="greetings">Your feedback drives change!</p>
        <button className="give-btn interaction" onClick={moveOn}>
          give feedback
        </button>
      </div>
    </div>
  );
};
