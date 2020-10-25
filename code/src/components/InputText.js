import React from 'react';

const InputText = ({ question, value, setName }) => {
	return (
		<>
			<label
				htmlFor="InputText"
				aria-label="Type your name to be able to proceed the survey"
			>
				<h2 tabIndex="0">{question} </h2>
				<input
					tabIndex="0"
					id="InputText"
					type="text"
					placeholder="Type your name"
					className="input-text-container"
					value={value}
					onChange={event => setName(event.target.value)}
					onKeyPress={event => {
						event.key === 'Enter' && event.preventDefault();
					}}
				/>
			</label>
		</>
	);
};

export default InputText;
