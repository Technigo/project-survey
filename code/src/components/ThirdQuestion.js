import React from "react";

export const ThirdQuestion = ({ ageInput, onAgeInputChange, nextQuestion }) => {
	return (
		<form>
			<label htmlFor="nameInput">What is your age?</label>
			{/* prettier-ignore */}
			<input
          id="nameInput"
          type="text"
          value={ageInput}
          onChange={onAgeInputChange}>
      </input>
			<button onClick={nextQuestion}>Next question</button>
		</form>
	);
};
