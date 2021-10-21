import React from "react";

const ageGroup = ["Under 13", "13-17", "18-24", "25-34", "35-44", "45-54", "55-64", "65-74", "75+"];

export const SecondQuestion = ({ ageInput, onAgeInputChange, nextQuestion, previousQuestion }) => {
	return (
		<form onSubmit={nextQuestion}>
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
			{ageInput === "Under 13" && <button type="submit">Next question</button>}
			{ageInput === "13-17" && <button type="submit">Next question</button>}
			{ageInput === "18-24" && <button type="submit">Next question</button>}
			{ageInput === "25-34" && <button type="submit">Next question</button>}
			{ageInput === "35-44" && <button type="submit">Next question</button>}
			{ageInput === "45-54" && <button type="submit">Next question</button>}
			{ageInput === "55-64" && <button type="submit">Next question</button>}
			{ageInput === "65-74" && <button type="submit">Next question</button>}
			{ageInput === "75+" && <button type="submit">Next question</button>}
			<button onClick={previousQuestion}>Previous question</button>
		</form>
	);
};

// {ageInput !== "" && <button type="submit">Next question</button>}

// {ageInput === ageGroup.map && <button type="submit">Next question</button>}

// {ageInput !== "" && <button type="submit">Next question</button>}

// {ageInput === ("Under 13" || "13-17" || "18-24" || "25-34" || "35-44" || "45-54" || "55-64" || "65-74" || "75+") && <button type="submit">Next question</button>}

// {ageInput === ("Under 13") && <button type="submit">Next question</button>}
