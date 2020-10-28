import React from "react";

const Button = ({ defaultState, currentState, disabled, setSection, nextQuestion }) => {
  const handleButton = event => {
    if(currentState !== defaultState) { 
      console.log(currentState);
      console.log(defaultState);
      setSection(nextQuestion);
    }
}

  return (
    <div>
      <button
        type="button"
        btnText="Nästa"
        onClick={handleButton}
        className="next-button"
      >
        Nästa
      </button>
    </div>
  );
};

export default Button;
