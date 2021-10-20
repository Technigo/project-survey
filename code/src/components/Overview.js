import React from "react";

export const Overview = ({ nameInput, ageInput, streamingInput, genresInput }) => {
	return (
		<section>
			<h2>Overview</h2>
			<p>First name: {nameInput}</p>
			<p>Your age group: {ageInput}</p>
			<p>Preferred streaming service: {streamingInput}</p>
			<p>Genres of TV shows you like: {genresInput}</p>
		</section>
	);
};
