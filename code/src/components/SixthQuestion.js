import React from "react";
import Star from "./Star";

const SixthQuestion = ({ onStepChange, gradeIndex, setGradeIndex }) => {
  const GRADES = ["", "one", "two", "thre", "Four"];
  const activeStar = {
    fill: "yellow",
  };

  const changeGradeIndex = (index) => {
    setGradeIndex(index);
  };
  return (
    <>
      <h2>How many stars would you like to give to our planet?</h2>
      <div className="container">
        <div className="stars">
          {GRADES.map((grade, index) => (
            <Star
              index={index}
              key={grade}
              changeGradeIndex={changeGradeIndex}
              style={gradeIndex > index ? activeStar : {}}
            />
          ))}
        </div>
        <button
          className="button"
          disabled={!gradeIndex}
          onClick={onStepChange}
        >
          Next questions
        </button>
      </div>
    </>
  );
};

export default SixthQuestion;
