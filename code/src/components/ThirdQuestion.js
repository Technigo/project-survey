import React from 'react';

const ticketTypes = ['Adult', 'Student', 'Pensioner'];

const ThirdQuestion = ({ ticketInput, onTicketInputChange, onStepChange }) => {
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
			<button
				disabled={ticketInput === ''}
				className="button"
				onClick={onStepChange}
			>
				Next Question
			</button>
		</form>
	);
};

export default ThirdQuestion;
