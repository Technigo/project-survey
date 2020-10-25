import React from 'react';

const Summary = ({ name, season, months, selected, value }) => {
	return (
		<div className="summary-container">
			<h2 tabIndex="0">Summary</h2>
			<p tabIndex="0">
				<strong>Your name:</strong> {name}
			</p>
			<p tabIndex="0">
				<strong>Your favourit season:</strong> {season}
			</p>
			<p tabIndex="0">
				<strong>Preferred month(s):</strong> {months.sort().join(', \u00A0')}
			</p>
			<p tabIndex="0">
				<strong>{season} experienced:</strong> Between {selected}
			</p>
			<p tabIndex="0">
				<strong>{season} likability:</strong> {value} out of 10
			</p>
		</div>
	);
};

export default Summary;
