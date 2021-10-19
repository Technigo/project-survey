import React from "react";

export const FirstQuestion = ({ nameInput, onNameInputChange, nextQuestion }) => {
	return (
		<form onSubmit={(event) => event.preventDefault()}>
			<label htmlFor="nameInput">What is your name?</label>
			{/* prettier-ignore */}
			<input
          id="nameInput"
          type="text"
          value={nameInput}
          onChange={onNameInputChange}>
      </input>
			<button onClick={nextQuestion}>Next question</button>
		</form>
	);
};
