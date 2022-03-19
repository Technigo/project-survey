import React from 'react'

const livingScale = ['1', '2', '3', '4', '5']


const Living = ({rooms, onroomsChange, onStepChange, onBackstepChange}) => {

    return (
        <section className="question-container">
            <label htmlFor='rooms'>
            <h4>How would you rate:</h4>
            <h2>The standard of the rooms?</h2>
                </label>
                <div className="radio-toolbar">
            {livingScale.map(scale => ( 
                <label key={scale}>
                <input
                type="radio"
                value={scale}
                onChange={onroomsChange}
                checked={rooms === scale}
                />
                {scale}
                </label>
            ))}
            </div> 
            <div className="locationButtons">
            <button onClick={onBackstepChange}>Back</button>
            <button onClick={onStepChange} disabled={rooms===""}>Go!</button>
            </div>
        </section>
    )
}

export default Living