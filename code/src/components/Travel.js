import React, { useState } from 'react'

const travelWays = ['By train', 'By car', 'By plane', 'Other']


const Travel = ({travelWay, ontravelWayChange, onStepChange, onBackstepChange}) => {

    return (
        <section className="question-container">
            <label htmlFor='travelWay'>
                <h2>How did you travel to our event?</h2>
                </label>
            <div className="travel-box">
                <div className="radiobuttons">
            {travelWays.map(trip => ( 
                <label key={trip}>
                <input
                type="radio"
                value={trip}
                onChange={ontravelWayChange}
                checked={travelWay === trip}
                />
                {trip}
                </label>
            ))}
            </div>
            <div className="travelbox-buttons">
            <button onClick={onStepChange} disabled={travelWay===""}>OK</button>
            <button onClick={onBackstepChange}>back</button>
            </div>
            </div>
        </section>
    )
}

export default Travel