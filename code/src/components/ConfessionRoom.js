import React from 'react'

const ConfessionRoom = ({ confession, onConfessionChange, onStepChange }) => {
    return (
        <div className="container">
            <h1>
                Welcome to the confession room.
            </h1>
            <p>Do you have a confession to make?</p>
            <form>
                <label>
                    <input 
                    type="radio"
                    value="yes"
                    onChange={() => onConfessionChange('yes')}
                    checked={confession === 'yes'}
                    />
                    <p className="radioText">
                        Yes, I want to make a confession.
                    </p>
                </label>
                <button 
                disabled={confession === ''}
                className="btn" 
                onClick={onStepChange}>Confession time</button>
            </form>
        </div>
    )
}

export default ConfessionRoom