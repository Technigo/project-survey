import React from "react";

export const Overview = ({ firstNameInput, lastNameInput, ageInput }) => {
	return (
		<section>
			<h2>Overview</h2>
			<p>First name: {firstNameInput}</p>
			<p>Laste name: {lastNameInput}</p>
			<p>Age: {ageInput}</p>
		</section>
	);
};
