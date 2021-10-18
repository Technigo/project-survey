import React from 'react';

const Overview = ({ nameInput, surnameInput, ageInput }) => {
	return (
		<section className="overview-container">
			<h2>Form inputs:</h2>
			<p>Name: {nameInput}</p>
			<p>Surname: {surnameInput}</p>
			<p>Age: {ageInput}</p>
			<p>Location: </p>
		</section>
	);
};

export default Overview;