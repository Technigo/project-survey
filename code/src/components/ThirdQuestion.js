import React from "react";

export const ThirdQuestion = ({ streamingInput, onStreamingInputChange, nextQuestion }) => {
	return (
		<form onSubmit={(event) => event.preventDefault()}>
			<label htmlFor="streamingInput">Which streaming service do you prefer?</label>
			{/* prettier-ignore */}
			<input
        id="streamingInput"
        type="text"
        value={streamingInput}
        onChange={onStreamingInputChange}
      />
			<button onClick={nextQuestion}>Submit</button>
		</form>
	);
};
