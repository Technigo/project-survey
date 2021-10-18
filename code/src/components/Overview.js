import React from 'react'


export const Overview = ({ nameInput, moodInput, socialInput, viewInput, onStepChange }) => {
	return (
		<section className='overview-container'>
			<h2>Based on your profile:</h2>
			<p>Name: {nameInput}</p>
			<p>Mood: {moodInput}</p>
            <p>Socially: {socialInput}</p>
            <p>View the world: {viewInput}</p>
		</section>
	)
}
