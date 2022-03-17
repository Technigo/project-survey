import React from 'react';

const Summary = ({ nameInput, selectInput, radioInput }) => {
	return (
		<div className='container'>
			<h2>Summary of survey</h2>
			<p>Name: {nameInput}</p>
			<p>Selected: {selectInput}</p>
			<p>Radio button: {radioInput}</p>
		</div>
	);
};

export default Summary;
