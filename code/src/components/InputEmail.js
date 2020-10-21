import React from 'react';
import './InputEmail.css';

export const InputEmail = ({ question, email, setEmail }) => {
	return (
		<label htmlFor="InputEmail">
			<h2>{question}</h2>
			<input
				id="InputEmail"
				type="email"
				className="input-email-container"
				onChange={event => setEmail(event.target.value)}
				value={email}
				onKeyPress={event => {
					event.key === 'Enter' && event.preventDefault();
				}} //to prevent form so update when pressed enter on text input
				required
			/>
		</label>
	);
};
