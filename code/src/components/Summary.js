import React from 'react';
import './Summary.css';

export const Summary = ({ name, season, selected, value, email }) => {
	return (
		<section className="summary-container">
			<h3>Summary</h3>
			<p>
				<b>Your name is:</b> {name}
			</p>
			<p>Your favourit season is: {season}</p>
			<p>
				Years experienced {season}: Somewhere between {selected}
			</p>
			<p>
				{season} likability: {value} out of 10
			</p>
			<p>Summary of your answers will be send to: {email}</p>
		</section>
	);
};
