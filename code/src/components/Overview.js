import React from 'react';
import Avatar from 'img/avatar.jpeg'

const Overview = ({ nameInput, countryInput, ageInput, emailInput }) => {

	return (
		<section className="overview-container">
				<div className="img-container">
					<img src={Avatar}alt="avatar-img" />
				</div>
				<div className="speech-bubble">
					<p>Thank you for your application, <span className="bold">{nameInput}</span>!</p>
					<p>We will reach out to you by  <span className="bold">{emailInput}</span>.
					You live in  <span className="bold">{countryInput}</span>  and your age is between  <span className="bold">{ageInput}</span>.  
					While you are waiting for us to contact you, visit our webpage  
					 <a href="https://www.netflix.com/se/title/81040344" target="_blank" rel="noopener noreferrer">here</a>	
					</p>
				</div>
		</section>
	);
};

export default Overview;