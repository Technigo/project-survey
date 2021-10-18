import React from "react"

export const SecondQuestion = ({moodInput, onMoodInputChange, onStepChange}) => {

    
    return (

        <div className="second-container">
            <h3>What's your mood?</h3>
            <label>
            <h4>Chill</h4>
                <input
                type='radio'
                value='Chill'
                onChange={onMoodInputChange}
                checked={moodInput === 'Chill'}
                />
            </label>

            <label>
            <h4>Hyped</h4>
                <input
                type='radio'
                value='Hyped'
                onChange={onMoodInputChange}
                checked={moodInput === 'Hyped'}
                />
            </label>

            <label>
            <h4>Overthinking</h4>
                <input
                type='radio'
                value='Overthinking'
                onChange={onMoodInputChange}
                checked={moodInput === 'Overthinking'}
                />
            </label>
            <button onClick={onStepChange}>Next question</button>

        </div>
    )
}