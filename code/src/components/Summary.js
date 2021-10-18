import React from 'react';

const Overview = ({ nameInput, experience, chosenPastry, date }) => {
	return (
		<section>
			<h2>My values from form :</h2>
			<p>Name : {nameInput}</p>
			<p>Experience: {experience}</p>
            <p>Pastry: {chosenPastry}</p>
            <p>Selected: {date.toDateString()}</p>

		</section>
	);
};

export default Overview;
