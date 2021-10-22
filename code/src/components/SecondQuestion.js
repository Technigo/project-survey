import React from "react";

const ageGroup = ["Under 13", "13-17", "18-24", "25-34", "35-44", "45-54", "55-64", "65-74", "75+"];

export const SecondQuestion = ({ ageInput, onAgeInputChange, nextQuestion, previousQuestion, step }) => {
	return (
		<div>
			<button onClick={previousQuestion}>Previous question</button>
			<form className="form-container" onSubmit={nextQuestion}>
				<p className="question-number">Question {step}</p>
				<h2 className="question-label">What is your age?</h2>
				{ageGroup.map((age) => (
					<div className="question-container">
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
					</div>
				))}
				{ageInput !== "" && <button type="submit">Next question</button>}
			</form>
		</div>
	);
};

// {ageInput !== "" && <button type="submit">Next question</button>}

// {ageInput === ageGroup.map && <button type="submit">Next question</button>}

// {ageInput !== "" && <button type="submit">Next question</button>}

// {ageInput === ("Under 13" || "13-17" || "18-24" || "25-34" || "35-44" || "45-54" || "55-64" || "65-74" || "75+") && <button type="submit">Next question</button>}

// {ageInput === ("Under 13") && <button type="submit">Next question</button>}
