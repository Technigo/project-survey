import React from 'react';

export const FormQ = ({ name, setName }) => {
	return (
		<React.Fragment>
			<h2>What is your dogs name?</h2>
			<img className="dogGif" src={require('../images/whiteDog.gif')} alt="Very white dog" />
			<form onSubmit={handleSubmit}>
				<input
					className="inputText"
					type="text"
					onChange={(event) => setName(event.target.value)}
					required
					value={name}
					placeholder="Enter your dogs name..."
				/>
			</form>
		</React.Fragment>
	);
};
const handleSubmit = (event) => {
	event.preventDefault();
};
