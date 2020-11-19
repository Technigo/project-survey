import React from "react";

const Button = ({ defaultState, currentState, setSection, nextQuestion }) => {
  const handleButton = () => {
    if(currentState !== defaultState) { 
      setSection(nextQuestion);
    }
}

  return (
    <div>
      <button
        type="button"
        btntext="Nästa"
        onClick={handleButton}
        className="next-button"
      >
        Nästa
      </button>
    </div>
  );
};

export default Button;
