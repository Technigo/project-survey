import React from 'react';
import Avatar from 'img/avatar.jpeg'
console.log(Avatar)

const Overview = ({ nameInput }) => {
	return (
		<section className="overview-container">
				<div className="img-container">
					<img src={Avatar}alt="avatar-img" />
				</div>
				<div className="speech-bubble">
					<p className="speech-bubble-text">
						Thank you for you application, {nameInput}!
						We will reach out to you.
					</p>
				</div>
		</section>
	);
};

export default Overview;