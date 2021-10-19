import React from "react";

export const SecondQuestion = ({ lastNameInput, onLastNameInputChange, nextQuestion }) => {
	return (
		<form>
			<label htmlFor="nameInput">Type your last name</label>
			{/* prettier-ignore */}
			<input
          id="nameInput"
          type="text"
          value={lastNameInput}
          onChange={onLastNameInputChange}>
      </input>
			<button onClick={nextQuestion}>Next question</button>
		</form>
	);
};
