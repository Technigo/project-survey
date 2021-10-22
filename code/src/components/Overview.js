import React from 'react';

const Overview = ({ movie, seat, ticket, snack, nameInput }) => {
	return (
		<section className="summary" tabIndex="6">
			<h2>
				Enjoy your scary movie <br />{' '}
				<span className="name-overview"> {nameInput}! </span>
			</h2>

			<div className="summary-details-container">
				<p>
					You have a <span className="details"> {ticket} </span> ticket to{' '}
					<span className="details">{movie} </span> on seat number{' '}
					<span className="details">{seat}</span> with{' '}
					<span className="details">{snack}</span>!
				</p>
			</div>
		</section>
	);
};

export default Overview;
