import React from 'react'

const Overview = ({nameInput, time, upperBody, lowerBody, cardioTypes}) => {
	return (
		<section className='overview' tabindex='0'>
			<h2>This is the workout for you, {nameInput}: </h2>
			<p>Chosen time : {time} minutes</p>
            <p>Selected motion for the upper body : {upperBody}</p>
            <p>Selected motion for the lower body : {lowerBody}</p>
			<p>Selected cardio type : {cardioTypes}</p>

			{cardioTypes === 'AMRAP' && <p>AMRAP means as many rounds as possible and you should do 15 reps for each.</p>}

			{cardioTypes === 'EMOM' && <p>EMOM is a workout where you do a specific exercise every time a new minute starts. If you finish before the next minute begins, you can rest until the next minute starts. You should do 10 reps for upper body in first minute then 10 reps for lower body in next minute and go on until your time is up.</p>}

			{cardioTypes === 'Straight Reps' && <p>Do 5x5 for each and take as much weight as possible. If you chose burpees, you can do 5x10.</p>}
		</section>                         
	)                   
}

export default Overview