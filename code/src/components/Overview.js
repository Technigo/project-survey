import React from 'react';

const Overview = ({ date, movie, seat, ticket, snack, nameInput }) => {
	return (
		<section htmlFor="summary " className="summary" tabIndex="7">
			<h2>
				Enjoy your scary movie <br />{' '}
				<span className="name-overview"> {nameInput}! </span>
				<audio src="/assets/soundfile.mp3" autoPlay />
			</h2>

			<div className="summary-details-container">
				<p>
					You have a <span className="details"> {ticket} </span>
					ticket to <span className="details">{movie} </span>
					on <span className="details">{date} </span>, on seat number{' '}
					<span className="details">{seat}</span> with{' '}
					<span className="details">{snack}</span>!
				</p>
			</div>
		</section>
	);
};

export default Overview;
