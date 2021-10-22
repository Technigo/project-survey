import React from "react";

export const Overview = ({ nameInput, ageInput, streamingInput, genresInput }) => {
	return (
		<main className="main-container">
			<h2 className="question-heading">Overview</h2>
			<p>First name: {nameInput}</p>
			<p>Your age group: {ageInput}</p>
			<p>Preferred streaming service: {streamingInput}</p>
			<p>Preferred genres of TV shows: {genresInput}</p>
		</main>
	);
};
