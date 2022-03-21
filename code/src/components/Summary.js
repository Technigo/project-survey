import React from 'react';

const Summary = ({ nameInput, skinTypeInput, ageGroupInput }) => {
	return (
		<div>
			<p>{nameInput}</p>
			<p>{skinTypeInput}</p>
			<p>{ageGroupInput}</p>

		</div>
	);
};

export default Summary;