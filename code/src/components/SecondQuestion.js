import React from "react";

const ageGroup = ["Under 13", "13-17", "18-24", "25-34", "35-44", "45-54", "55-64", "65-74", "75+"];

export const SecondQuestion = ({ ageInput, onAgeInputChange, nextQuestion }) => {
	return (
		<form onSubmit={(event) => event.preventDefault()}>
			What is your age?
			{ageGroup.map((age) => (
				<label key={age} htmlFor={age}>
					{/* prettier-ignore */}
					<input
            id={age}
            type="radio"
            value={age}
            onChange={onAgeInputChange}
            checked={age === ageInput}
          />
					{age}
				</label>
			))}
			<button onClick={nextQuestion}>Next question</button>
		</form>
	);
};
