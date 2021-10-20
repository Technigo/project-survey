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
			<h2>Your creepy answers:</h2>
            <ul className="answers-container">
			<li aria-label={nameInput}>Name: {nameInput}</li>
			<li aria-label={radioInput}>Best director: {radioInput}</li>
            <li aria-label={dropdownInput}>Best movie: {dropdownInput}</li>
            <li aria-label={songInput}>Scariest villain: {songInput}</li>
            </ul>
        <button className="btn" onClick={onRestartChange}>Restart</button>
        </section>
        </>
	)
}

export default Overview
