import React from 'react'

const Overview = ({ 
    nameInput, 
    radioInput, 
    dropdownInput,
    songInput,
    onRestartChange
    
}) => {
	return (
        <>
		<section className="overview-container">
			<h2>My values from form :</h2>
			<p>Name : {nameInput}</p>
			<p>Type of Music : {radioInput}</p>
            <p>Artist : {dropdownInput}</p>
            <p>Best song : {songInput}</p>
        <button onClick={onRestartChange}>Restart</button>
        </section>
        </>
	)
}

export default Overview
