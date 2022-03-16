import React from 'react';

const Overview = ({ nameInput, time, upperBody, lowerBody, cardioTypes, random }) => {
	return (
		<section>
			<h2>This is the workout for you, {nameInput}: </h2>
			<p>Chosen time : {time} minutes</p>
            <p>Selected motion for the upper body : {upperBody}</p>
            <p>Selected motion for the lower body : {lowerBody}</p>
			<p>Selected cardio type : {cardioTypes}</p>
			<p>show random value no : {random}</p>

			{time < 15 && <p>less than 10</p>}
			{time > 15 && <p>more than 10</p>}
			{time === 15 && <p>equal</p>}

		</section>                         
	);                   
};

export default Overview;