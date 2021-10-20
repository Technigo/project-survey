import React from "react";

const ageGroup = ["Under 13", "13-17", "18-24", "25-34", "35-44", "45-54", "55-64", "65-74", "75+"];

export const SecondQuestion = ({ onAgeInputChange, nextQuestion }) => {
	return (
		<form onSubmit={(event) => event.preventDefault()}>
			What is your age?
			{ageGroup.map((ageInput) => (
				<label key={ageInput} htmlFor="ageInput">
					{/* prettier-ignore */}
					<input
            id="ageInput"
            type="radio"
            value={ageInput}
            onChange={onAgeInputChange}
            // checked={ageGroup === ageInput}
          />
					{ageInput}
				</label>
			))}
			<button onClick={nextQuestion}>Next question</button>
		</form>
	);
};
