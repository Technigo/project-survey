import React from 'react';

const FourthQuestion = ({ flavour, onFlavourChange, onStepChange }) => {
	return (
		<section className="containerInfo">
			<form>
				<label>
					Pick your popcorn flavour
					<span role="img" aria-label="corn">
						🌽
					</span>
					<select
						value={flavour}
						onChange={(event) => onFlavourChange(event.target.value)}
					>
						<option value="unseasoned">Unseasoned</option>
						<option value="sweet">Sweet</option>
						<option value="garlic">Garlic</option>
						<option value="butter">Butter</option>
						<option value="sourcream">Sourcream</option>
						<option value="salty">Salty</option>
					</select>
				</label>
				<button onClick={onStepChange}>Next question</button>
			</form>
		</section>
	);
};

//this is made with jennies approach on how to write. plese re-do this ant question no3 or redo the 1st and 2nd one
export default FourthQuestion;
