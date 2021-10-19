import React from "react";

export const SecondQuestion = ({ ageInput, onAgeInputChange, nextQuestion }) => {
	return (
		<form onSubmit={(event) => event.preventDefault()}>
			<label htmlFor="ageInput">What is your age?</label>
			{/* prettier-ignore */}
			<input
          id="ageInput"
          type="text"
          value={ageInput}
          onChange={onAgeInputChange}>
      </input>
			<button onClick={nextQuestion}>Next question</button>
		</form>
	);
};
