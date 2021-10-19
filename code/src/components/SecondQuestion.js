import React from "react";

export const SecondQuestion = ({ ageInput, onAgeInputChange, nextQuestion }) => {
	const ageGroup = ["Under 13 years old", "13-17 years old", "18-24 years old", "25-34 years old", "35-44 years old", "45-54 years old", "55-64 years old", "65-74 years old", "75 years or older"];

	return (
		<form onSubmit={(event) => event.preventDefault()}>
			{ageGroup.map((ageInput) => (
				<label key={ageInput} htmlFor="ageInput">
					What is your age?
					{/* prettier-ignore */}
					<input
            id="ageInput"
            type="radio"
            value={ageInput}
            onChange={onAgeInputChange}>
          </input>
					{ageInput}
				</label>
			))}
			<button onClick={nextQuestion}>Next question</button>
		</form>
	);
};

// export const SecondQuestion = ({ ageInput, onAgeInputChange, nextQuestion }) => {
// 	return (
// 		<form onSubmit={(event) => event.preventDefault()}>
// 			<label htmlFor="ageInput">What is your age?</label>
// 			{/* prettier-ignore */}
// 			<input
//           id="ageInput"
//           type="text"
//           value={ageInput}
//           onChange={onAgeInputChange}>
//       </input>
// 			<button onClick={nextQuestion}>Next question</button>
// 		</form>
// 	);
// };
