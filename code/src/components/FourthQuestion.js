import React from 'react';

const FourthQuestion = ({
	snack,
	onSnackChange,
	onStepChange,
	onMinusStepChange,
}) => {
	//const { nameInput, onNameInputChange } = props; // Object destructuring, to extract properties from objects and bind them to variables
	return (
		<form className="form-container4" tabIndex="5">
			<label>
				<h1>Pick your snack!</h1>
			</label>
			<select
				value={snack}
				onChange={(event) => onSnackChange(event.target.value)}
			>
				<option value="popcorn">Popcorn</option>
				<option value="nachos">Nachos</option>
				<option value="M&M's">M&M'S</option>
				<option value="Twizzlers">Twizzlers</option>
			</select>

			<div className="button-box">
				<button className="button" onClick={onMinusStepChange}>
					Previous
				</button>
				<button className="button" onClick={onStepChange}>
					Next
				</button>
			</div>
		</form>
	);
};

export default FourthQuestion;
