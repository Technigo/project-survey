import React from "react";

const ageGroup = ["Under 13", "13-17", "18-24", "25-34", "35-44", "45-54", "55-64", "65-74", "75+"];

export const SecondQuestion = ({ ageInput, onAgeInputChange, nextQuestion }) => {
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
