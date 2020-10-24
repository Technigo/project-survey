import React from 'react';

const Summary = ({ name, season, months, selected, value }) => {
	return (
		<div className="summary-container">
			<h2 tabIndex={'0'}>Summary</h2>
			<p>
				<strong>Your name:</strong> {name}
			</p>
			<p>
				<strong>Your favourit season:</strong> {season}
			</p>
			<p>
				<strong>Preferred month(s):</strong> {months.sort().join(', \u00A0')}
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

export default Summary;
