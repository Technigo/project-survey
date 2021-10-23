import React from 'react';

const Overview = ({ nameInput, surnameInput, happiness, flavour }) => {
	return (
		<section>
			<h2>Thank you for your input! This is how i feel about it:</h2>
			<p>
				Imagine enjoying your favorite {nameInput} in {surnameInput}. What a
				treat!
			</p>
			<p>
				You say that you are{' '}
				{happiness === 'happy' ? 'good, but a bit hungry' : 'not so well'} today{' '}
				. Maybe some {flavour} popcorn will help? 🍿{' '}
			</p>
		</section>
	);
};

export default Overview;
