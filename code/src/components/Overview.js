import React from 'react'

const Overview = ({ 
    nameInput, 
    musicInput, 
    artistInput,
    songInput
}) => {
	return (
		<section>
			<h2>My values from form :</h2>
			<p>Name : {nameInput}</p>
			<p>Type of Music : {musicInput}</p>
            <p>Artist : {artistInput}</p>
            <p>Best song : {songInput}</p>
		</section>
	)
}

export default Overview
