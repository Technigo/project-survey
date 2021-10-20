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
			<h2>Your creepy answers :</h2>
			<p>Name : {nameInput}</p>
			<p>Best horror director : {radioInput}</p>
            <p>Best movie : {dropdownInput}</p>
            <p>Scariest horror villain : {songInput}</p>
        <button className="btn" onClick={onRestartChange}>Restart</button>
        </section>
        </>
	)
}

export default Overview
