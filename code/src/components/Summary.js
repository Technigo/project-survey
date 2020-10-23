import React from 'react';

export const Summary = ({ name, season, selected, value, email }) => {
	return (
		<section className="summary-container">
			<h3>Summary</h3>
			<p>
				<strong>Your name is:</strong> {name}
			</p>
			<p>
				<strong>Your favourit season is:</strong> {season}
			</p>
			<p>
				<strong>{season} experienced:</strong> Between {selected}
			</p>
			<p>
				<strong>{season} likability:</strong> {value} out of 10
			</p>
			<p>
				<strong>Summary of your answers will be send to: </strong>
				{email}
			</p>
		</section>
	);
};
