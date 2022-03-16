import React from 'react'

const Overview = ({ nameInput, time, upperBody, lowerBody, cardioTypes, random, program }) => {
	return (
		<section>
			<h2>This is the workout for you, {nameInput}: </h2>
			<p>Chosen time : {time} minutes</p>
            <p>Selected motion for the upper body : {upperBody}</p>
            <p>Selected motion for the lower body : {lowerBody}</p>
			<p>Selected cardio type : {cardioTypes}</p>
		</section>                         
	)                   
}

export default Overview