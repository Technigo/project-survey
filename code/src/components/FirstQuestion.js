import React from "react";

export const FirstQuestion = ({ nameInput, onNameInputChange, nextQuestion }) => {
	return (
		<form onSubmit={nextQuestion}>
			<label htmlFor="nameInput">What is your name?</label>
			{/* prettier-ignore */}
			<input
        id="nameInput"
        type="text"
        value={nameInput}
        onChange={onNameInputChange}
      />
			{nameInput !== "" && <button type="submit">Next question</button>}
		</form>
	);
};

// <form onSubmit={(event) => event.preventDefault()}>
// <button onClick={nextQuestion}>Next question</button>
