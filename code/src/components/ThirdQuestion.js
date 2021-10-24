import React from 'react'

const ThirdQuestion = ({ travelPersonInput , onTravelPersonChange, onStepChange }) => {
    return (
        <>
        <form className="section"> 
            <h2>Do you like to travel?</h2>
            <label> 
                <input 
                    type="radio" 
                    value="travel" 
                    onChange={() => onTravelPersonChange('travel')}
                    checked={travelPersonInput === 'travel'}
                />
                <span role="img" aria-label="Traveling person">
                    💃🏻 oh yes!
                </span>
            </label>

            <label> 
                <input 
                    type="radio" 
                    value="nottravel" 
                    onChange={() => onTravelPersonChange('nottravel')}
                    checked={travelPersonInput === 'nottravel'}
                />
                <span role="img" aria-label="Not-Traveling person">
                    🧎‍♂️ oh no...
                </span>
            </label>
            <button onClick={onStepChange}>Please continue</button>
        </form>
        </>
    )
}

export default ThirdQuestion