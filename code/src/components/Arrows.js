import React from "react";

import { ReactComponent as ArrowDown } from "../images/arrow-down.svg";
import { ReactComponent as ArrowUp } from "../images/arrow-up.svg";

const Arrows = ({ question, setQuestion }) => {
  return (
    <div className="arrow-wrapper">
      <p className="view-questions"> View questions: </p>
      <div
        className="arrow"
        onClick={(event) => {
          event.preventDefault();
          if (question <= 3) {
            setQuestion(question + 1);
          }
        }}
      >
        <ArrowDown />
      </div>
      <div
        className="arrow"
        onClick={(event) => {
          event.preventDefault();
          if (question >= 2) {
            setQuestion(question - 1);
          }
        }}
      >
        <ArrowUp />
      </div>
    </div>
  );
};

export default Arrows;
