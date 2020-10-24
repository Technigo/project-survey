import React from 'react';
import '../Styles/InputEmail.css';

const InputEmail = ({ question, email, setEmail }) => {
	return (
		<>
			<h3 tabIndex={'0'}>{question}</h3>
			<label
				htmlFor="InputEmail"
				aria-label="Type your email address to be able to submit the survey"
			>
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
