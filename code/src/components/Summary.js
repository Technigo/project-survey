import React from 'react';

const Overview = ({ nameInput, experience, chosenPastry, date,  }) => {
	return (
		<section className="summary">
		<h2 className="summary-header">Welcome on a morning baking course {nameInput}!</h2>
		<p className="summary-text">We will bake <strong>{chosenPastry}</strong> on <strong>{experience}</strong> level. </p>
		<p className="summary-text">See you the <strong>{date.toDateString()}</strong> at 9 o'clock! </p>
		<h2 className="summary-header">Have Bunderful day!</h2>

		<button className="reset-button" tabIndex="0" type="button" onClick={() => window.location.reload()}>Reset</button>

		</section>
	);
};

export default Overview;
