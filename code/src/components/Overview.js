import React from "react";

export const Overview = ({ nameInput, ageInput, streamingInput, genresInput }) => {
	return (
		<main className="main-container">
			<div className="overview-container">
				<h2 className="question-heading">Overview</h2>

				{ageInput === "18+" && <p>You can drink wine!</p>}

				{/* <p>First name: {nameInput}</p>
				<p>Your age group: {ageInput}</p>
				<p>Preferred streaming service: {streamingInput}</p>
				<p>Preferred genres of TV shows: {genresInput}</p> */}
			</div>
		</main>
	);
};

// {ageInput === "18+" && <p>You can drink wine!</p>}
