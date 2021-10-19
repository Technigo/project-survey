import React from 'react';

const Overview = ({ nameInput, experience, chosenPastry, date, setHappiness  }) => {
	return (
		<section>
			<h2>My values from form :</h2>
			<p>Name : {nameInput}</p>
			<p>Experience: {experience}</p>
            <p>Pastry: {chosenPastry}</p>
            <p>Selected: {date.toDateString()}</p>
			<p>Happiness: {setHappiness}</p>



		</section>
	);
};

export default Overview;
