import React from 'react';
import '../Styles/InputEmail.css';

const InputEmail = ({ question, email, setEmail }) => {
	return (
		<>
			<h4 tabIndex={'0'}>{question}</h4>
			<label htmlFor="InputEmail">
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
		</>
	);
};

export default InputEmail;
