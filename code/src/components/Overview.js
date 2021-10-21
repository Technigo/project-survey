import React from 'react';
import Avatar from 'img/avatar.jpeg'

const Overview = ({ nameInput, countryInput, ageInput, emailInput, moodInput }) => {

	return (
		<section className="overview-container">
				<div className="img-container">
					<img src={Avatar}alt="avatar-img" />
				</div>
				<div className="speech-bubble">
					<p>Thank you for your application, <span className="bold">{nameInput}</span>!</p>
					<p>Our office in <span className="bold">{countryInput}</span> will contact you at the specified email address <span className="bold">{emailInput}</span>.
					Your age <span className="bold">{ageInput}</span> is common in our games 
					You can read more about us on our page 

					<a href="https://www.netflix.com/se/title/81040344" target="_blank" rel="noopener noreferrer">here</a>	

					<span className="bold">Best regards,</span> 
					Pink Soldier
					</p>
					<button onClick={() => {window.location.reload(false)}}>Reset</button>
				</div>
		</section>
	);
};

export default Overview;