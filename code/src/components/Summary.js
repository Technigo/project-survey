import React from 'react';

export const Summary = ({ name, season, selected, value }) => {
	return (
		<div className="summary-container">
			<h3>Summary</h3>
			<p>
				<strong>Your name:</strong> {name}
			</p>
			<p>
				<strong>Your favourit season:</strong> {season}
			</p>
			<p>
				<strong>{season} experienced:</strong> Between {selected}
			</p>
			<p>
				<strong>{season} likability:</strong> {value} out of 10
			</p>
		</div>
	);
};
