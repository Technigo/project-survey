import React from 'react'

const FifthQuestion = ({ ratingInput, onRatingInputChange, onStepChange }) => {
    return (
        <form>
            <label>
                <input 
                    type="radio"
                    value="1"
                    onChange={onRatingInputChange}
                    checked={ratingInput === "1"}
                />
                1
            </label>
            <label>
                <input 
                    type="radio"
                    value="2"
                    onChange={onRatingInputChange}
                    checked={ratingInput === "2"}
                />
                2
            </label>
            <label>
                <input 
                    type="radio"
                    value="3"
                    onChange={onRatingInputChange}
                    checked={ratingInput === "3"}
                />
                3
            </label>
            <button onClick={onStepChange}>Overview</button>
        </form>
    )
}

export default FifthQuestion