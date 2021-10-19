import React from 'react';
import Avatar from 'img/avatar.jpeg'

const Overview = ({ nameInput, cityInput, ageInput, emailInput }) => {
	console.log(cityInput)
	return (
		<section className="overview-container">
				<div className="img-container">
					<img src={Avatar}alt="avatar-img" />
				</div>
				<div className="speech-bubble">
					<h4>Thank you for your application, <span className="bold">{nameInput}</span>!</h4>
					<h5>Here is an overview: </h5>
					<h6 className="speech-bubble-text">
						Email: {emailInput}
					</h6>
					<h6>City: {cityInput}</h6>
					<h6>Age: {ageInput}</h6>
				</div>
		</section>
	);
};

export default Overview;