import React from 'react';
import Avatar from 'img/avatar.jpeg'

const Overview = ({ nameInput, countryInput, ageInput, emailInput, moodInput }) => {

	return (
		<section className="overview-container">
				<div className="img-container">
					<img src={Avatar}alt="avatar-img" />
				</div>
				<div className="speech-bubble">
					<h4>Thank you for your application, <span className="bold">{nameInput}</span>!</h4>
					<p>Our office in <span className="bold">{countryInput}</span> will contact you at the specified email address <span className="bold">{emailInput}</span>.
					Your age between <span className="bold">{ageInput}</span> is common in our games. 
					While you wait read more about us on our webpage <a href="https://www.netflix.com/se/title/81040344" 
					target="_blank" rel="noopener noreferrer">here</a>.	<br></br><br></br>

					<span className="bold">Best regards,</span><br></br>Pink Soldier</p>
					
					<button onClick={() => {window.location.reload(false)}}>Reset</button>
				</div>
		</section>
	);
};

export default Overview;