import React from "react";

const NextButton = ({ setSection, nextQuestion, disabled }) => {
  const handleButton = () => {
    setSection(nextQuestion);
  };
  return (
    <div>
      <button
        type="button"
        btntext="Nästa"
        onClick={handleButton}
        className="next-button"
        disabled={disabled}
      >
        Nästa
      </button>
    </div>
  );
};

export default NextButton;
