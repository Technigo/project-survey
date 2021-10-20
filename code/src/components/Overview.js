import React from 'react';

const Overview = ({ nameInput, surnameInput, ageInput }) => {
	return (
		<section className="overview-container">
			<h2 className="overview-heading">Form inputs:</h2>
			<p className="overview-text">Name: {nameInput}</p>
			<p className="overview-text">Surname: {surnameInput}</p>
			<p className="overview-text">Age: {ageInput}</p>
			<p className="overview-text">Location: </p>
		</section>
	);
};

export default Overview;