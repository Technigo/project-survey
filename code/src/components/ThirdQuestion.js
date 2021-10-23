import React from 'react';

const ticketTypes = ['Adult', 'Student', 'Pensioner'];

const ThirdQuestion = ({
	ticketInput,
	onTicketInputChange,
	onStepChange,
	onMinusStepChange,
}) => {
	return (
		<form className="form-container3" tabIndex="3">
			<h1>Ticket Types</h1>
			{ticketTypes.map(
				(
					ticket //iterating through each ticketType array
				) => (
					<label className="ticket-types" key={ticket}>
						<input
							type="radio"
							value={ticket}
							onChange={onTicketInputChange}
							checked={ticketInput === ticket}
							required
						/>
						{ticket}
					</label>
				)
			)}

			<div className="button-box">
				<button className="button" onClick={onMinusStepChange}>
					Previous
				</button>
				<button
					className="button"
					disabled={ticketInput === ''}
					onClick={onStepChange}
				>
					Next
				</button>
			</div>
		</form>
	);
};

export default ThirdQuestion;
