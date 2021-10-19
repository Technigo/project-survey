import React from "react";

export const FirstQuestion = ({ firstNameInput, onFirstNameInputChange, nextQuestion }) => {
	return (
		<form onSubmit={(event) => event.preventDefault()}>
			<label htmlFor="nameInput">Type your first name</label>
			{/* prettier-ignore */}
			<input
          id="nameInput"
          type="text"
          value={firstNameInput}
          onChange={onFirstNameInputChange}>
      </input>
			<button onClick={nextQuestion}>Next question</button>
		</form>
	);
};
