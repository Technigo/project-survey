import React from "react"

const FifthQuestion = ({ noOfBadThings, onNoOfBadThingsChange, onStepChange}) => {
    return (
        <div className="container">
        <form>
            <label>
                <h2>How many bad things have you done? (in your lifetime)</h2>
                <input
                className="formControl" 
                type="radio"
                value="first"
                onChange={() => onNoOfBadThingsChange('first')}
                checked={noOfBadThings === 'first'}
                />
                <p className="radioText">This is the first</p>
            </label>

            <label>
                <input
                className="formControl" 
                type="radio"
                value="couple"
                onChange={() => onNoOfBadThingsChange('couple')}
                checked={noOfBadThings === 'couple'}
                />
                <p className="radioText">A couple</p>
            </label>

            <label>
                <input
                className="formControl" 
                type="radio"
                value="plenty"
                onChange={() => onNoOfBadThingsChange('plenty')}
                checked={noOfBadThings === 'plenty'}
                />
                <p className="radioText">Plenty</p>
            </label>

            <label>
                <input
                className="formControl" 
                type="radio"
                value="millions"
                onChange={() => onNoOfBadThingsChange('millions')}
                checked={noOfBadThings === 'millions'}
                />
                <p className="radioText">Can't even count 'em</p>
            </label>
            <button
            className="btn" 
            disabled={noOfBadThings === ''}
            onClick={onStepChange}>To the confession</button>
        </form>
        </div>
    )
}

export default FifthQuestion