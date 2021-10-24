import React from 'react'

const FourthQuestion = ( {travelDestination, onTravelDestinationChange, onStepChange }) => {

    return (
        <>
        <form className="section">
        <h2>What is your next travel destination?</h2> 
            <label>
                <select value={travelDestination} onChange={event => onTravelDestinationChange(event.target.value)}>
                    <option value="Stockholm">Stockholm</option>
                    <option value="Barcelona">Barcelona</option>
                    <option value="Zurich">Zurich</option>
                    <option value="Berlin">Berlin</option>
                </select>
            </label>
            <button
            onClick={onStepChange}
            >See your overview</button>
        </form>
        </>
    )
}

export default FourthQuestion