import React from 'react';
import '../Styles/InputEmail.css';

export const InputEmail = ({ question, email, setEmail }) => {
	return (
		<label htmlFor="InputEmail">
			<h4>{question}</h4>
			<input
				id="InputEmail"
				type="email"
				className="input-email-container"
				onChange={event => setEmail(event.target.value)}
				value={email}
				onKeyPress={event => {
					event.key === 'Enter' && event.preventDefault();
				}}
				required
			/>
		</label>
	);
};
