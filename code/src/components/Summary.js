import React from 'react';

const Overview = ({ nameInput, experience, chosenPastry, date  }) => {
	return (
		<section className="summary">
		<h2 className="summary-header">Welcome on a morning baking course {nameInput}!</h2>
		<p className="summary-text">We will bake {chosenPastry} on {experience} level. </p>
		<p className="summary-text">See you the {date.toDateString()} at 9 o'clock! </p>
		<button className="reset-button" tabIndex="0" type="button" onClick={() => window.location.reload()}>Reset</button>

		</section>
	);
};

export default Overview;
