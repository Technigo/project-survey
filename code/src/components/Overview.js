import React from 'react';

const Overview = ({ nameInput, surnameInput, happiness, flavour }) => {
	return (
		<section className="containerInfo">
			<h2>Thank you for your input! This is how I feel about it:</h2>
			<p>
				Imagine enjoying your favorite {nameInput} in {surnameInput}. What a
				treat!
			</p>
			<p>
				You say that you are{' '}
				{happiness === 'happy' ? 'good, but a bit hungry' : 'not so well'} today{' '}
				. Maybe some {flavour} popcorn will help? 🍿{' '}
			</p>

			<p>
				Thank you for stopping by! Hope you have a nice day{' '}
				<span role="img" aria-label="White heart">
					🤍
				</span>
			</p>
		</section>
	);
};

export default Overview;
