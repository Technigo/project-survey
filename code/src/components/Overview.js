import React from 'react';

const Overview = ({ nameInput, surnameInput }) => {
	return (
		<section>
			<h2> Your answers from the quiz: </h2>
			<p>Name: {nameInput} </p>
			<p>Surname:{surnameInput}</p>
			<p>Workout place:{}</p>
			<p> </p>
			<p> </p>
		</section>
	);
};

export default Overview;
