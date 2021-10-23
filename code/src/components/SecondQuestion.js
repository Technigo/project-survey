import React from 'react';

const SecondQuestion = ({
	seatInput,
	onSeatChange,
	onStepChange,
	onMinusStepChange,
}) => {
	return (
		<form className="form-container2" tabIndex="2">
			<label>
				<h1>Pick your seat </h1>
			</label>
			<select
				value={seatInput}
				onChange={(event) => onSeatChange(event.target.value)}
			>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
				<option value="8">8</option>
				<option value="9">9</option>
				<option value="10">10</option>
				<option value="11">11</option>
				<option value="12">12</option>
				<option value="13">13</option>
				<option value="14">14</option>
				<option value="15">15</option>
			</select>
			<div className="button-box">
				<button className="button" onClick={onMinusStepChange}>
					Previous
				</button>
				<button
					className="button"
					disabled={seatInput === ''}
					onClick={onStepChange}
				>
					Next
				</button>
			</div>
		</form>
	);
};

export default SecondQuestion;
