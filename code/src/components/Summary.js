import React from 'react';

const Summary = ({ wordInput, selectInput, radioInput }) => {
	return (
		<div className='container'>
			<div className=''>
				<h2>Summary of answers</h2>
				<p>Lmao "{wordInput}", good one xd</p>
				<p>
					Oh so you choose {selectInput}s? I hate {selectInput}s, {wordInput}{' '}
					{selectInput}s!{' '}
				</p>
				<p>
					You strongly believe that jellyfishes are {radioInput}. Same bro.{' '}
				</p>
				<h3>Thanks and good bye!</h3>
			</div>
		</div>
	);
};

export default Summary;

// window.location.reload();
