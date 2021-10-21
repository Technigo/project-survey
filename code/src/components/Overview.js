import React from 'react'

const Overview = ({ 
    nameInput, 
    radioInput, 
    dropdownInput,
    songInput,
    step
    
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
            <div className="question-number">
        		{step <= 5 && <p>Question number: {step}/5</p>}
     		</div>
        </section>
        <form className="btn-container">
          <button className="btn" type="submit">
            restart
          </button>
        </form>
        </>
	)
}

export default Overview
