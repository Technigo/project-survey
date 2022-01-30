import React from 'react';

const Date = ({ date, onDateInputChange, onStepChange, onMinusStepChange }) => {
	// const { nameInput, onNameInputChange } = props;

	return (
		<form className="form-container5" tabIndex="4">
			<label htmlFor="dateInput">
				<h1>Pick a Date</h1>
			</label>

			<input
				type="date"
				id="start"
				date="trip-start"
				value={date}
				min="2021-10-25"
				max="2022-10-31"
				onChange={onDateInputChange}
				required
			/>
			<div className="button-box">
				<button className="button" onClick={onMinusStepChange}>
					Previous
				</button>
				<button
					className="button"
					disabled={date === ''}
					onClick={onStepChange}
				>
					Next
				</button>
			</div>
		</form>
	);
};

export default Date;
